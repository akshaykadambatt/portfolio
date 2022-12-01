---
title: 'A booking page made by Apline.js'
metaTitle: 'This booking page was created only using Apline.js helper functions'
metaDesc: 'This booking page was created only using Apline.js helper functions'
socialImage: images/23-09-2022.jpg
date: '2022-12-01'
tags:
  - code
  - vanilla-js
  - apline-js
  - post
---
# A booking page made by Apline.js
## This booking page was created only using Apline.js helper functions
Alpine is a rugged, minimal tool for composing behavior directly in your markup. Think of it like jQuery for the modern web. Plop in a script tag and get going. Alpine is a collection of 15 attributes, 6 properties, and 2 methods. Everything in Alpine starts with an x-data directive. Inside of x-data, in plain JavaScript, you declare an object of data that Alpine will track. Every property inside this object will be made available to other directives inside this HTML element. In addition, when one of these properties changes, everything that relies on it will change as well. State (JavaScript data that Alpine watches for changes) is at the core of everything you do in Alpine. You can provide local data to a chunk of HTML, or make it globally available for use anywhere on a page using x-data or Alpine.store() respectively.
```html

    <!--NEW WORLD ORDER-->
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <div x-data="booking()" class="main">
        Step <span x-text="count+1"></span>
        <span x-text="notice" class="notification"></span>
        <br>
        <button x-show="loading"><svg style="height: 30px;width: 30px;" version="1.1" id="L9"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 60 90" enable-background="new 0 0 0 0" xml:space="preserve">
                <path fill="#000"
                    d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s"
                        from="0 50 50" to="360 50 50" repeatCount="indefinite" />
                </path>
            </svg> loading...
        </button>
        <!-- STEP ONE -->
        <div class="select-date" x-show="count==0">
            <fieldset>
                <legend><h2>Trekker's Details</h2></legend>
                <select name="trek" id="trek-select" x-model="trek" x-init="retriveTreks()" 
                    x-on:change="retriveDates(`${trek}`);date=0">
                    <option value="0" selected>Please select</option>
                    <template x-for="treki in treks.Results">
                        <option x-bind:value="`${treki.trek_id}`" x-text="`${treki.trek_name}`"></option>
                    </template>
                </select>
                <br>
                <select name="date" id="date-select" x-model="date" x-on:change="makeBookingEntry()">
                    <option value="0" selected>Please select</option>
                    <template x-for="datei in dates.Results">
                        <option x-bind:value="`${datei.id}`" x-show="datei.trek_seats - datei.paid"
                            x-text="`${dateText(datei.trek_start_date,datei.trek_end_date,datei.paid,datei.trek_seats)}`"></option>
                    </template>
                </select>
            </fieldset>
            <br>
            <fieldset x-show="trek&&date">
            <legend><h2>Trek participation details</h2></legend>
            <template x-for="trekker in trekkers">
                <div>
                    <span x-text="`${trekker.trek_tfname} ${trekker.trek_tlname}`"></span>
                    <button @click="removeTrekker(`${trekker.trekker_token}`)" x-show="trekker.payment_status!='paid'">X</button>
                    <span x-show="trekker.payment_status=='paid'">✅ Paid</span>
                </div>
            </template>
            <form onsubmit="return false" x-show="!addNewUser" @submit.prevent="submitAddTrekkerForm">
                <input type="email" name="new-trekker" x-model="newTrekker" placeholder="new-trekker" />
                <button type='submit' name="add-trekker" class="add-trekker" id="add-trekker"
                    >add-trekker</button> <!-- @click="(newTrekker) && addTrekker()" -->
            </form>
            <form onsubmit="return false" x-show="addNewUser" @submit.prevent="submitAddTrekkerForm">
                <span style="color:red;display:block;" id="add-trekker-error">User dont exist, please create a new user</span>
                <input type="email" name="Temail" x-model="newTrekker" placeholder="email" />
                <input type="text" name="Tfname" placeholder="first name" />
                <input type="text" name="Tlname" placeholder="last name" />
                <input type="date" name="Tdob" placeholder="date of birth" />
                <input type="tel" name="Tcontact" placeholder="phone number" />
                <input type="tel" name="Temergency" placeholder="emergency phone number" />
                <select name="Tgender">
                    <option value="Male">male</option>
                    <option value="Female">female</option>
                    <option value="Other">other</option>
                </select>
                <input type="text" name="Tcountry" placeholder="country" />
                <input type="text" name="Tstate" placeholder="state" />
                <input type="text" name="Tcity" placeholder="city" />
                <input type="number" name="Theight" placeholder="height" />
                <input type="number" name="Tweight" placeholder="weight" />
                <input type="file" name="id" placeholder="aadhar/dl/passport" />

                <button type='submit' name="add-trekker" class="add-trekker" id="add-trekker"
                    >add trekker</button> <!-- @click="(newTrekker) && addTrekker()" -->
                <button type='button' name="add-trekker" class="add-trekker" id="add-trekker"
                    @click="addNewUser = 0">cancel/add another email</button> <!-- @click="(newTrekker) && addTrekker()" -->
            </form>
            </fieldset>
            <button @click="increment(); getCoupons();" 
                x-bind:disabled="date==0 || trek==0 || trekkerArrayEmpty()" class="automate">next step</button>

        </div>
        <!-- STEP TWO -->
        <div class="manage-order" x-show="count==1">
            <fieldset>
                <legend><h2>manage order</h2></legend>
                <template x-for="trekker in trekkers">
                    <div>
                        <span x-text="`${trekker.trek_tfname} ${trekker.trek_tlname}`"></span>
                        <button @click="removeTrekker(`${trekker.trekker_token}`)" x-show="trekker.payment_status!='paid'">X</button>
                        <span x-show="trekker.payment_status=='paid'">✅ Paid</span>
                        <template x-for="coupon in trekker.coupons">
                            <div x-show="trekker.payment_status!='paid'">
                                <label>
                                    <input type="checkbox"
                                        x-bind:checked="coupon.active"
                                        x-on:change="`${couponCheckboxChange(this.event,trekker.trekker_token,coupon.coupon_code,(coupon.coupon_display_category||coupon.trek_coupon_type))}`"/>
                                    <span x-text="`${coupon.coupon_name} (${coupon.coupon_code})`"></span>
                                </label> 
                                <button @click="`${showCouponDetails = coupon.coupon_code}`">more info</button>
                                <!-- Coupon pop up -->
                                    <div x-show="(showCouponDetails==coupon.coupon_code)" x-transition.duration.400ms class="coupon-box-one" @click.outside="`${showCouponDetails = 0}`">
                                        <div class="coupon-box-two">
                                            <div class="coupon-box-three">
                                                <button @click="`${showCouponDetails = 0}`">X</button>
                                                <table>
                                                    <tr><td>Name</td><td><span x-text="`${coupon.coupon_name}`"></span></td></tr>
                                                    <tr><td>Coupon code</td><td><span x-text="`${coupon.coupon_code}`"></span></td></tr>
                                                    <tr><td>Amount</td><td><span x-text="`${coupon.coupon_amount}`"></span></td></tr>
                                                    <tr><td>Trek Name</td><td><span x-text="`${coupon.trek_name}`"></span></td></tr>
                                                    <tr><td>Description</td><td><span x-text="`${coupon.coupon_description}`"></span></td></tr>
                                                    <tr><td>Expiry date</td><td><span x-text="`${coupon.coupon_expiry}`"></span></td></tr>
                                                    <tr><td>Included regions</td><td><span x-text="`${coupon.coupon_inc_region}`"></span></td></tr>
                                                    <tr><td>Included treks</td><td><span x-text="`${coupon.coupon_inc_trek}`"></span></td></tr>
                                                    <tr><td>Usage</td><td><span x-text="`${coupon.coupon_ind_usage}`"></span></td></tr>
                                                    <tr><td>Mergable</td><td><span x-text="`${coupon.coupon_merge}`"></span></td></tr>
                                                    <tr><td>Terms and conditions</td><td><span x-text="`${coupon.coupon_terms}`"></span></td></tr>
                                                    <tr><td>Transfer type</td><td><span x-text="`${coupon.coupon_transfer_type}`"></span></td></tr>
                                                    <tr><td>Coupon type</td><td><span x-text="`${coupon.coupon_type}`"></span></td></tr>
                                                </table>
                                            </div>
                                        </div>
                                        <div @click="`${showCouponDetails = 0}`" class="coupon-overlay">overlay</div>
                                    </div>
                                <!--/ Coupon pop up -->
                            </div>
                        </template>
                        <div x-show="trekker.payment_status!='paid'">
                            <input type="text" placeholder="add coupon" x-bind:name="`coupon-${trekker.trekker_token}`">
                            <button @click="addCoupon(`${trekker.trekker_token}`, `coupon-${trekker.trekker_token}`)">+</button>
                        </div>
                    </div>
                </template>
            </fieldset>
            <br>
            <fieldset>
                <legend><h2>Payment Details</h2></legend>
                <table>
                    <tr>
                        <td>Trek</td>
                        <td></td>
                        <td x-text="`${(treks && trek) && treks.Results[treks.Results.findIndex(e=>e.trek_id==trek)].trek_name}`"></td>
                    </tr>
                    <tr>
                        <td>Departure</td>
                        <td></td>
                        <td x-text="`${(dates && date) && dateFormat(dates.Results[dates.Results.findIndex(e=>e.id==date)].trek_start_date)}`"></td>
                    </tr>
                    <tr>
                        <td>Paritcipants</td>
                        <td></td>
                        <td x-text="`${trekkers.length}`"></td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td x-text="`${trekkers.length} * Trek price`"></td>
                        <td x-text="`₹ ${price}`"></td>
                    </tr>
                    <tr>
                        <td>Discount</td>
                        <td></td>
                        <td x-text="`₹ ${discount}`"></td>
                    </tr>
                    <tr>
                        <td>GST</td>
                        <td>5%</td>
                        <td x-text="`₹ ${tax}`"></td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td></td>
                        <td x-text="`₹ ${priceWithDiscountAndTax}`"></td>
                    </tr>
                </table>
            </fieldset>
            <div><label><input type="checkbox" name="accept-terms" value="1" x-model="terms" /> Accept Terms</label></div>
            <button @click="decrement()" x-bind:disabled="count==0">prev step</button>
            <button @click="pay()" x-bind:disabled="terms==0 || trekkerArrayEmpty() || price<1 || loading==1">pay</button>
        </div>
        <!-- STEP THREE: Success page -->
        <div class="paid-order" x-show="count==2">
            <h2>Payment successfull!</h2>
            <p>Happy trekking!</p>
            <template x-for="trekker in trekkers">
                    <div>
                        <span x-text="`${trekker.trek_tfname} ${trekker.trek_tlname}`"></span>
                        <span x-show="trekker.payment_status=='paid'">✅ Paid</span>
                    </div>
            </template>
            If you want to add more participants, go back to 
            <button @click="decrement(); await makeBookingEntry(); await getCoupons();" x-bind:disabled="count==0">prev step</button>
            <p> Or use this link
                <input value="url" class="js-copytextarea"></input>
                <button class="js-textareacopybtn" style="vertical-align:top;" @click="copyLink()">Copy</button>
            </p>
        </div>
    </div>
    <script>
        let homeUrl = "<?= get_home_url(); ?>";
        let trekApiUserUrl = "<?= get_home_url()."/wp-content/plugins/trek/api/user/trek-api-user.php";?>";
        let trekCustomizationUrl = "<?= get_home_url()."/wp-content/plugins/trek/api/user/trek-customization.php";?>";
        let currentUserEmail = "<?php $current_user = wp_get_current_user();echo $current_user->user_email;?>";
        let aadhaarUploadUrl = "<?= get_home_url()."/wp-content/plugins/trek/template/user/upload.php";?>"; 
        //UI based on AplineJS (https://alpinejs.dev/start-here)
        function booking() {
            return {
                count: 0, //steps count
                treks: {Results:[]}, //all treks
                trek: 0, //selected trek
                dates: {Results:[]}, //all dates of selected trek
                date: 0, //selected date
                trekkers: [], //all trekkers
                newTrekker: "", //new trekker input box
                price: 0, //price from server
                priceWithDiscountAndTax: 0,
                tax: 0,
                terms: 0, //accept terms checkbox
                loading: 0,
                addNewUser: 0, //add user from for non existant users as trekker,
                discount: 0,
                bookingId: "", //coming from getCoupons() (dont know why this exists)
                showCouponDetails:0,
                notice: "",
                increment() { //increment a step
                    this.count < 2 ? this.count++ : this.count
                },
                decrement() { //decrement a step
                    this.count != 0 ? this.count-- : this.count
                },
                incrementConditions() { //accept terms and enable payment
                    if (this.trek == 0 && this.date == 0) return true
                },
                trekkerArrayEmpty() { //return true if trekkers empty; enable increment button
                    if (this.trekkers && this.trekkers.length == 0) return true
                    return false
                },
                async removeTrekker(trekker) {
                    let response = await performFetch(trekApiUserUrl,constructFormData({
                        action: "removeTrekker",
                        id: trekker
                    }))
                    this.makeBookingEntry()
                },
                async addCoupon(trekker, couponInput) {
                    let coupon = document.querySelector(`[name="${couponInput}"]`).value
                    if(!coupon) this.notify("Enter a coupon code");return;
                    let response = await performFetch(trekCustomizationUrl,constructFormData({
                        data: "couponValidation",
                        trek: this.trek,
                        bookingId: this.bookingId,
                        userId: trekker,
                        couponId: coupon,
                        couponType: "website"
                    }))
                    console.log(trekker,response);
                    response.couponDetails.active = 1
                    this.addCouponDataToTrekkers([response.couponDetails], "couponValidation", trekker)
                    await this.getAppliedCoupons()
                    await this.getDiscountValue()
                    await this.getPrice()
                    document.querySelector(`[name="${couponInput}"]`).value = ""
                },
                async pay() {
                    console.log(`pay ${this.priceWithDiscountAndTax} amount`)
                    let response = await performFetch(trekApiUserUrl,constructFormData({
                        action: "purchaseslots",
                        amount: this.priceWithDiscountAndTax,
                    }))
                    localStorage.setItem('trekkers',JSON.stringify(this.trekkers))
                    localStorage.setItem('bookingId',this.bookingId)
                    let options = {
                        amount: response.amount_due,
                        order_id: response.id,
                        key: "rzp_test_lzdE6c1WVMaWBs",
                        currency: response.currency,
                        name: "TTH",
                        description: "TTH Trek Booking",
                        image: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/wgqtgtnifgh8pg9vzjw9",
                        notes: {
                            address: "Razorpay Corporate Office",
                            booking_id: this.bookingId,
                            Name: currentUserEmail,
                            UserID: currentUserEmail,
                            Participants:  JSON.stringify(this.trekkers),
                            "Phone Number": currentUserEmail,
                            "E mail": currentUserEmail,
                            "Trek Name": this.trek,
                            "Trek Date": this.date
                        },
                        theme: {
                            color: "#3399cc"
                        },
                        prefill: {
                            name: currentUserEmail,
                            email: currentUserEmail,
                            contact: '7777777777'
                        },
                        handler: async function (res){
                            try {
                                let response2 = await performFetch(trekApiUserUrl,constructFormData({
                                    action: "paymentDetails",
                                    amount: response.amount_due,
                                    participants: localStorage.getItem('trekkers'),
                                    orderId: res.razorpay_order_id,
                                    paymentId: res.razorpay_payment_id,
                                    bookingId: localStorage.getItem('bookingId')
                                }))
                            } catch (error) {}
                            let accessAplineInstance = getAplineInstance();
                            accessAplineInstance.count++
                        }
                    }
                    var rzp10 = new Razorpay(options);
                    rzp10.open();
                },
                async retriveTreks() {
                    this.treks = await performFetch(trekApiUserUrl,constructFormData({
                        action: "getAllTreks",
                    }))
                },
                async retriveDates(trek) {
                    this.dates = await performFetch(trekApiUserUrl,constructFormData({
                        action: "getTreksDates",
                        selected_trek: trek
                    }))
                },
                async makeBookingEntry() {
                    let response = await performFetch(trekApiUserUrl,constructFormData({
                        action: "getTrekkersDetails",
                        selTrek: this.trek,
                        selDate: this.date,
                        ownerid: currentUserEmail,
                    }))
                    if(response.result=="fetch"){ //booking entry exists
                        this.trekkers = response.data
                        await this.getAppliedCoupons()
                        await this.getDiscountValue()
                        await this.getPrice()
                    } else if(response.result=="no booking") { //no booking entry exists
                        this.createNewBookingEntry()
                    } else { //something wrong with this date
                        this.date = 0
                        this.trekkers = []
                        this.notify("Invalid date")
                    }
                    this.newTrekker="" //clear new trekker input field
                },
                async createNewBookingEntry() { 
                    //if makeBookingEntry return "no booking", this creates a booking entry
                    let response = await performFetch(trekApiUserUrl,constructFormData({
                        action: "getTrekkersDetailsOwner",
                        selTrek: this.trek,
                        selDate: this.date,
                        ownerid: currentUserEmail,
                    }))
                    if(response.message == "success") this.makeBookingEntry()
                },
                notify(notification) {
                    this.notice = notification
                    document.querySelector('.notification').style.opacity = 1;
                    setTimeout(() => {
                        document.querySelector('.notification').style.opacity = 0;
                        this.notice = ""
                    }, 3000);
                },
                dateFormat(date, noYear = 0) {
                    if(noYear){
                        var options = { day: 'numeric', month: 'short' }
                    }else {
                        var options = { day: 'numeric', month: 'short', year: 'numeric' }
                    }
                    return (new Date(date)).toLocaleDateString("en-GB",options)
                },
                dateText(start, end, paid, total) {
                    if(((paid/total)*100)<50){
                        return `${this.dateFormat(start, 'no-year')}-${this.dateFormat(end)} (Open)`
                    }else{
                        return `${this.dateFormat(start, 'no-year')}-${this.dateFormat(end)} (Closing ${total-paid} seats)`
                    }
                },
                async submitAddTrekkerForm(e) { //add trekker form (same function for both existing & new user)
                    if(this.addNewUser == 1){ //new user form showing
                        const data = new FormData(e.target);
                        let fileUrl = await performFetch(aadhaarUploadUrl,constructFormData({
                            "upload-image": data.get("id"),
                        }))
                        data.append("Tidentity", fileUrl.message)
                        data.append("selTrek", this.trek)
                        data.append("selDated", this.date)
                        data.append("action", "addTrekBookingDetailsTrekkers")
                        let response = await performFetch(trekApiUserUrl,data)
                        if(response.result != "inserted") { //if user not added break here
                            return;
                        } else {
                            /**
                             * if user got addded, hide the new user form and not breaking continue
                             * execution which adds the email in the newTrekker field to the trekkers list.
                             */
                            this.addNewUser = 0
                        }
                    } 
                    //new user form not showing
                    let response = await performFetch(trekApiUserUrl,constructFormData({
                        action: "checkExistance",
                        mail: this.newTrekker,
                    }))
                    if(response.message == "not existed") {
                        this.notify("User doesnt exist, add as new user");
                        this.addNewUser = 1 //user dont exist so show the add new user form
                    }else if(response.info == "User Found") {
                        let response2 = await performFetch(trekApiUserUrl,constructFormData({
                            action: "addTrekBookingDetailsTrekkers",
                            Temail: response.data.trek_user_email,
                            selTrek: this.trek,
                            selDate: this.date,
                            Tfname: response.data.trek_tfname,
                            Tlname: response.data.trek_tlname,
                            Tgender: response.data.trek_user_gender,
                            Tdob: response.data.trek_user_dob,
                            Theight: response.data.trek_user_height,
                            Tweight: response.data.trek_user_weight,
                            Tcity: response.data.trek_user_city,
                            Tstate: response.data.trek_user_state,
                            Tcountry: response.data.trek_user_country,
                            Tcontact: response.data.trek_user_contact_number,
                            Temergency: response.data.trek_user_emergency_number,
                            Tidentity: ""
                        }))
                        this.makeBookingEntry()
                    }
                },
                async getCoupons() {
                    let response = await performFetch(trekApiUserUrl,constructFormData({
                        action: "getTrekkersDetailsCoupon",
                        selTrek: this.trek,
                        selDate: this.date,
                    }))
                    this.bookingId = response.bookingId //result of poor seperation of concerns
                    //response.participants contains the coupons
                    this.addCouponDataToTrekkers(response.participants, "getTrekkersDetailsCoupon")
                    
                    await this.getAppliedCoupons()
                    await this.getDiscountValue()
                    await this.getPrice()
                },
                async getAppliedCoupons() {
                    let response = await performFetch(trekCustomizationUrl,constructFormData({
                        data: "getSelectedCoupons", //its `data` when using trekCustomizationUrl
                        trek: this.trek,
                        bookingId: this.bookingId,
                    }))
                    this.addCouponDataToTrekkers(response.dataCoupons, "getSelectedCoupons")
                    for(const i in response.dataCoupons){ //add an `active` property to this.trekkers[0].coupons.couponName 
                        let temp = this.trekkers[
                            this.trekkers.findIndex(e=>e.trekker_token==response.dataCoupons[i].trek_coupon_user)
                        ];
                        try {
                            if(temp && temp.coupons && temp.coupons[response.dataCoupons[i].trek_coupon_code]){
                                this.trekkers[
                                    this.trekkers.findIndex(e=>e.trekker_token==response.dataCoupons[i].trek_coupon_user)
                                ].coupons[response.dataCoupons[i].trek_coupon_code].active = 1;
                            } //this coupon will now be `checked=true` in the coupon section
                        } catch(error){console.log(error)}
                    }
                },
                async getDiscountValue() {
                    let response = await performFetch(trekCustomizationUrl,constructFormData({
                        data: "updateDiscountValue",
                        trek: this.trek,
                        bookingId: this.bookingId,
                    }))
                    this.discount = +response.totalDeduction
                    this.getPrice()
                },
                addCouponDataToTrekkers(arr, type, trekker = null) {
                    /**
                     * This is for adding coupons to this.trekkers object.
                     * This is called in 3 instances. This is a bit confusing as all 3 backend calls
                     * result in different response structures.
                     * 3 backend calls are couponValidation, getSelectedCoupons, getTrekkersDetailsCoupon.
                     * All 3 should be handled differently.
                     */
                    //This basically is a single liner that adds the coupons to this.trekkers object
                    try {
                        for(const i in arr){ //loop through coupons
                            if(!arr[i].coupon_code){
                                let temp = arr[i].trek_coupon_code;
                                arr[i].coupon_code = temp;
                            }
                            (this.trekkers[ //take this.trekkers object
                                this.trekkers.findIndex( //find the trekker to which this coupon belongs
                                    e=> {
                                        if(type=="couponValidation") return e.trekker_token==trekker
                                        if(type=="getTrekkersDetailsCoupon") return e.trekker_token==arr[i].trekker_token
                                        if(type=="getSelectedCoupons") return e.trekker_token==arr[i].trek_coupon_user
                                    } 
                                )
                            ].coupons ??= {})[ //create .coupons key if it doesnt exist
                                arr[i].coupon_code //add the coupon_code as key
                            ] = arr[i] //add coupon data to the coupon_code key
                        } //this data is used in the second step to show coupons of each trekker
                    } catch (error) {
                        console.log(`Coupon parse error: This error occurs when the trekker from the applied coupons dont exist in this booking, probably because the trekker was removed with the coupon left active`, error)
                    }
                },
                async couponCheckboxChange(event, trekker, code, type, website = 0) {
                    let elem = event.currentTarget
                    let response = await performFetch(trekCustomizationUrl,constructFormData({
                        data: elem.checked ? "couponValidation":"couponValidationRemove",
                        trek: this.trek,
                        bookingId: this.bookingId,
                        userId: trekker,
                        couponId: code,
                        couponType: type
                    }))
                    if(response.result=="failed"){
                        elem.checked = false
                        alert(`Coupon error: ${response.responseStatus}`)
                        //TODO: failed alert
                    } 
                    this.getDiscountValue()
                },
                async getPrice() {
                    let response = await performFetch(trekApiUserUrl,constructFormData({
                        action: "getCalculatedPrice",
                        trek: this.trek,
                        bookingId: this.bookingId,
                    }))
                    this.price = response.trekCost;
                    let priceWithDiscount = this.price-this.discount;
                    this.tax = priceWithDiscount*0.05;
                    this.priceWithDiscountAndTax = priceWithDiscount+this.tax;
                },
                async copyLink() {
                    var copyTextarea = document.querySelector('.js-copytextarea');
                    copyTextarea.focus();
                    copyTextarea.select();

                    try {
                        var successful = document.execCommand('copy');
                        var msg = successful ? 'successful' : 'unsuccessful';
                        console.log('Copying text command was ' + msg);
                    } catch (err) {
                        console.log('Oops, unable to copy');
                    }
                }
            };
        }
        async function performFetch(url, body) {
            const accessApline = Alpine.mergeProxies(document.querySelector('.main')._x_dataStack)
            accessApline.loading = 1
            try {
                let result = await (await fetch(url, {method: "POST",body: body})).json()
                accessApline.loading = 0
                return result
            } catch (error) {
                accessApline.loading = 0
                return error
            }
        }
        function constructFormData(object) {
            let formData = new FormData()
            for (const property in object) {
                formData.append(property, object[property])
            }
            return formData
        }
        function getAplineInstance() {
            return Alpine.evaluate(document.querySelector('.main'), '$data')
        }
        //Apply GET parameters from URL
        let getParamsObject = ([...(new URLSearchParams(window.location.search))]).reduce((prev,curr)=>(
            Object.assign(prev,{[curr[0]]:curr[1]})
        ),{})
        let applyGetParams = setInterval(()=>{
            if(getParamsObject.trek && document.querySelectorAll("#trek-select option").length>1){
                document.querySelector("#trek-select").value = getParamsObject.trek;
                document.querySelector("#trek-select").dispatchEvent(new Event("change"))
                delete getParamsObject.trek;
            }
            if(getParamsObject.date && document.querySelectorAll("#date-select option").length>1){
                document.querySelector("#date-select").value = getParamsObject.date;
                document.querySelector("#date-select").dispatchEvent(new Event("change"))
                delete getParamsObject.date;
            }
            console.log("Automate: applying GET parameters: ",getParamsObject);
            if(Object.keys(getParamsObject).length <1) clearInterval(applyGetParams)
        },500)
        //[END] Apply GET parameters from URL

        // Automate trek pick, date pick, step 2
        // setTimeout(()=>{
        //         document.querySelector('[name="trek"]').value=2
        //         document.querySelector('[name="trek"]').dispatchEvent(new Event('change'));
        //         setTimeout(()=>{
        //             document.querySelector('[name="date"]').value=1205
        //             document.querySelector('[name="date"]').dispatchEvent(new Event('change'));
        //             setTimeout(()=>{
        //                 document.querySelector('.automate').click()
        //             },1500)
        //         },2000)
        //     },3000)
        /**
         * To access these values outside of Apline's context, use;
         * 
         * const accessApline = Alpine.mergeProxies(document.querySelector('.main')._x_dataStack)
         * const count = accessApline.count //0
         * const trekkres = accessApline.trekkers // ['str', 'str', 'str']
         * accessApline.count = 3+4 //changes count to 7 within Apline's context
         * 
         * OR
         * 
         * const accessApline = Alpine.evaluate(document.querySelector('.main'), '$data')
         * 
         * where document.querySelector('.main') is the host of Apline
         * */
    </script>
```

Use this as a reference for future needs.