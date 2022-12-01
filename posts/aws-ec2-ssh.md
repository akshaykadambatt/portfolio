---
title: 'Connecting to an AWS EC2 instance using SSH'
metaTitle: 'This is how you connect to an AWS EC2 instance using SSH and its .cer file'
metaDesc: 'This is how you connect to an AWS EC2 instance using SSH and its .cer file'
socialImage: images/23-09-2022.jpg
date: '2022-12-01'
tags:
  - code
  - bash
  - post
---
# Connecting to an AWS EC2 instance using SSH
## This is how you connect to an AWS EC2 instance using SSH and its .cer file
Go to EC2->click on one instance->click on "Connect" button
Go to SSH tab, copy the URL from the 4th step and enter that in the SSH client (bitwise ssh). Enter the username given. Enter the .cer file/.pem file into the client.
Alternatively do
```
ssh -i "YourSpace.cer" root@ec2-3-109-169-110.ap-south-1.compute.amazonaws.com
```
or
```
ssh ec2-user@3.109.169.110 -i "YourSpace.cer"
```
in terminal. Make sure to chmod 400 file.cer or it wont connect.
Go to EC2, click on Security Groups->Inbound rules tab->Edit inbound rules button->Add rule button at the bottom->Add entry ssh, public ip, a name-> save eveything.
Now go to client/terminal and try to connect.
The installation must be in srv/ or var/www/html
To get sudo access enter
```
sudo su
```
