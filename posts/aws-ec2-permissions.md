---
title: 'Setting up proper permissions in an AWS EC2 instance'
metaTitle: 'This is how you fix and harden an EC2 instance but keep it write and read friendly'
metaDesc: 'This is how you fix and harden an EC2 instance but keep it write and read friendly'
socialImage: images/23-09-2022.jpg
date: '2022-12-01'
tags:
  - code
  - php
  - bash
  - post
---
# Setting up proper permissions in an AWS EC2 instance
## This is how you fix and harden an EC2 instance but keep it write and read friendly
Step 1: Change owner of files.
Step 2: chmod folder
Step 3: chmod files
Step 4: Move apache to Group
Step 5: Give Group permissions to read and write
```bash
sudo chown -R ec2-user:apache /var/www/html
sudo chmod -R 755 /var/www/html
```
```bash
sudo find /var/www/html/ -type d -exec chmod 755 {} \;
sudo find /var/www/html/ -type f -exec chmod 644 {} \;
```
```bash
sudo chgrp -R apache /var/www/html
sudo chmod -R g+rw /var/www/html
sudo chmod -R g+s /var/www/html
Then edit /wordpress-install/wp-config.php and define the fs_method
```
And in the configuration file (wp-config.php):
```php
define('FS_METHOD', 'direct');
```
(https://stackoverflow.com/a/36979008/7481663)
