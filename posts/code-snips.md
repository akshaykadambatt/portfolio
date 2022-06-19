---
title: 'Code snippets that will come handy'
metaTitle: 'Code snippets that will come handy'
metaDesc: 'This contains some most used code snips'
socialImage: images/22-09-2021.jpg
date: '2021-09-22'
tags:
  - nextjs
  - post
---
# Code snippets that will come handy
## PHP
### Loop variables in blade
Check if the item is first or last in the collection.
```php
@foreach ($users as $user)
    @if ($loop->first)
        This is the first iteration.
    @endif

    @if ($loop->last)
        This is the last iteration.
    @endif

    <p>This is user {{ $user->id }}</p>
@endforeach
```
#### Other $loop stuff

<table>
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>$loop->index</td><td>The index of the current loop iteration (starts at 0).</td></tr>
    <tr><td>$loop->iteration</td><td>The current loop iteration (starts at 1).</td></tr>
    <tr><td>$loop->remaining</td><td>The iterations remaining in the loop.</td></tr>
    <tr><td>$loop->count</td><td>The total number of items in the array being iterated.</td></tr>
    <tr><td>$loop->first</td><td>Whether this is the first iteration through the loop.</td></tr>
    <tr><td>$loop->last</td><td>Whether this is the last iteration through the loop.</td></tr>
    <tr><td>$loop->even</td><td>Whether this is an even iteration through the loop.</td></tr>
    <tr><td>$loop->odd</td><td>Whether this is an odd iteration through the loop.</td></tr>
    <tr><td>$loop->depth</td><td>The nesting level of the current loop.</td></tr>
    <tr><td>$loop->parent</td><td>When in a nested loop, the parent's loop variable.</td></tr>
  </tbody>
</table>

### Comments
Comments within blades have the following syntax.
```php
{{-- This comment will not be present in the rendered HTML --}}
```

### Requests 
#### Retrieving Boolean Input Values
```php
//returns true for 1, "1", true, "true", "on", and "yes". All other values will return false:
$archived = $request->boolean('archived'); 
```

### File storage
```php
Route::post('process', function (Request $request) {
    $path = $request->file('photo')->store('photos'); //Or $request->photo->store('images')
    dd($path); // photos/3hcX8yrOs2NYhpadt4Eacq4TFtpVYUCw6VTRJhfn.png

    $photo = $request->file('photo');
    $filename = 'profile-photo-' . $request->id . '.' . $file->getClientOriginalExtension(); //Or $request->photo->extension()
    $path = $photo->storeAs('photos', $filename);
    dd($path); // photos/profile-photo-100.png

    //Or Multiple files
    // $paths  = [];
    // foreach ($photos as $photo) {
    //     $extension = $photo->getClientOriginalExtension();
    //     $filename  = 'profile-photo-' . time() . '.' . $extension;
    //     $paths[]   = $photo->storeAs('photos', $filename);
    // }
    //
    // dd($paths); //array:2 ["photos/profile-photo-1517315875.gif","photos/profile-photo-1517315875.png"]
});
```

#### Retriving files
```php
$filename = User::where('id', Auth::user()->id())->firstOrFail('filename');
$filename = 'profile-photo-' . Auth::user()->id() . '.jpg';
$path = Storage::path('photos/' . $filename);

if(Storage::exists($path)){
        return Response::download($path, $filename);
}
```

### Eloquent
Database manipulation 
```php
//Set the entry, i.e. update existing entry OR create then update that entry
public function setDashboardConfigs($vars)
{ 
    $entry = DashboardSetting::firstOrNew(
        ['role_id' => $vars['id']] //Retrive if role_id=num exist or instantiate a new DashboardSetting instance
    );
    $entry->dashboard_items = json_encode($vars['items']);
    $entry->save();
    return response()->json($entry->toArray());
}

//Sum of column values
$data = CookRating::select('CookID')
    ->with('cook:cook_name,id')
    ->whereDate('AddedDate', '>=', $date[0])
    ->whereDate('AddedDate', '<=', $date[1])
    ->where('Status', 0)->groupBy('CookID')
    ->selectRaw('sum(NoOfBatch) as batches, sum(NoOfDays) as days, avg(Value) as rating')
    ->has('cook')
    ->get()
    ->map(function ($item) {
        return [
            "name" => ($item->cook? $item->cook->cook_name:null),
            "days" => $item->days,
            "batches" => $item->batches,
            "rating" => $item->rating + 0,
        ];
    });

//Counts in ranges
$ranges = [ // the start of each age-range.
    '0-17' => 0,
    '18-24' => 18,
    '25-34' => 25,
    '35-44' => 35,
    '45-54' => 45,
    '55-64' => 55,
    '64+' => 64,
];
$output = Trekuser::select('trek_user_dob as dob')
    ->get()
    ->map(function ($user) use ($ranges) {
        $age = Carbon::parse($user->dob)->age;
        foreach ($ranges as $key => $breakpoint) {
            if ($breakpoint >= $age) {
                $user->range = $key;
                break;
            }
        }
        return $user;
    })
    ->mapToGroups(function ($user, $key) {
        return [$user->range => $user];
    })
    ->map(function ($group) {
        return count($group);
    })
    ->sortKeys()->toArray();

```

### Carbon
Date manipulation 
```php
$date1 = Carbon::parse($trek_start_date);
$date2 = Carbon::parse($trek_end_date);
$sumOfDays += $date1->diffInDays($date2);
```
