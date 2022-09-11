---

slug: no-log-custodial-wallet-wizarding-pay

title: No-log custodial wallet - Wizarding Pay

authors: [tunogya]

tags: [WizardingPay]

---

# No-log custodial wallet: Wizarding Pay

## What is Wizarding Pay?

**Wizarding Pay** is a no-log custodial wallet. It's a registration-free wallet that can be used on telegram or discord.

## How to register Wizarding Pay?

If you already have a Telegram account, it also means you already have a Wizarding Pay account. 

Anyone can transfer money to you, use any network, even if you haven't interacted with our products, because everything
is registration-free. We will not collect any of your data. Even, we are not using any database.

## How to deposit token to Wizarding Pay?

You can deposit token to Wizarding Pay by using the command `/depositqrcode` in our telegram bot [@WizardingPayBot](https://t.me/WizardingPayBot).

## Who can use my token in my Wizarding Pay Account?

Only our system can use your token. We will not sell your token to anyone. We will not use your token to do anything.
Our system runs in memory, so user private key is much safer.

## How the system is implemented?

Our Root Key is stored in AWS KMS, and the HD Wallet is generated through the Root Key. Through our default rules, 2^32
platforms can be derived, each platform has 2^32 zones, and each zone has 2^32 Index, each index corresponds to a 
private key.

In this mode, we securely store the user's private key without the need for a database.

Our code will be open source and anyone can perform security checks on our system.
