# 0X
## Notice : This dapp contains only the basic functionalities of the proposed system, not the application in its full scale.
## This app lets you create a certificate, and you can upload the certificate to IPFS, get the hash of the file, then publish the hash on Ethereum. It is somewhat foolish to do this way but just as a proof of concept, I am designing it like this. There is a main server that runs seperately which simply hosts a bunch of static pages, then it redirects the users based on their tier to respective destinations on the DAPP. So a second server is running that is written in VueJS, (made from some code I used from https://github.com/danielefavi) as I did not have enough time to make it from scratch. Most of the code is as it was.

**This is it. The decentralized web application written in Vue JS and Solidity. 
Done using the VueJS box from truffle. Run as a seperate server away from server 1.**

**_I hope that you know what you are doing. Just following the instructions might not be enough to make it work. This doc assumes that you have Linux installed._**

>Make sure that you have the following installed.

- IPFS 

IPFS (Inter Planatary File System) is used for storing the certificate file that is created by the certifier. We then use the hash that IPFS returns post upload of the file and then we put it on the Ethereum network. If you want to read more about IPFS go to https://ipfs.io/

- Truffle

Truffle is the framework, the suit that has all tools that we actually need to develop something that could run on the Ethereum network. In our case, it gives us Ganache, and some other stuff that we need to start working on the project. Such as boxes. If you feel like reading more about boxes, go to https://www.trufflesuite.com/

- Ganache

Ganache will give you needed Ethereum nodes where you can put the smart contract you write. It runs locally on the machine itself. By default it gives you ten accounts to play with. It is strictly for development purposes.

- IPFS Companion (Add-on for both Firefox and Chrome; To redirect requests from the browser to the IPFS node)

- Metamask (Add-on Firefox/Chrome)

Metamask can manage your Ethereum wallet. Show you details about the network, transactions and authorize transactions. It will help you manage your Ethereum wallet.

```
git clone https://github.com/ar1997/0X
```

And WAIT. **IT TAKES TIME**

After installation make sure that you have ganache running locally, then go to MetaMask, set up the account. Make sure that it detects and connects to the Ganache network running locally on your machine. Import a few accounts for testing.

>If you want to, you can configure ganache to be detectable ovehttps://ipfs.io/r the network and access the application from other devices.

Now host the main static pages on a simple web server. You can use any server that you want or one that you built yourself. If it is up and running, You can now run the IPFS daemon. You can do that by simply running 

```
ipfs daemon
```

If that is up and running you will have the web user interface of IPFS on port 8080. Now that we have done all that, Let us configure Truffle. CD into the app-users directory. And run the following.

```
truffle console --network ganache
```

Now you will be able to see the console. To use our dapp, we need to compile and deploy the smart contracts that we have written on to the test network, ganache. Run

```
migrate --reset --compile-all
```

If the migration was successful, copy the file **~/server2/build/contracts/Users.json** into the folder **~/server2/app-users/src/assets/**.


then CD into the directory 

```
cd server/quack_quack/app-users
```

Check if package-lock.json is present, if so delete it and run the following command, else run it directly anyway.

```
npm install
```

After running the IPFS, Server one, now you can now run the dapp. Using the following command. First cd into the folder app-users and run 

```
npm run dev
```

By default if you have IPFS daemon running on port 8080 let us say that you are using port 8081 for server 1, you should have your dapp running on port 8082. If you are having difficulties regarding redirection from server one to server two simply change port numbers on the web pages and you will be good to go.


So now you have the DAPP running on the local machine, and you need to host the files from server #1 and direct the users to that first. After setting everything up, you might need to  change the port numbers/address that the files hosted on server #1 so that the user will be redirected to the required destinations.


This is my first doc. It might contain errors. I am not responsible for anything that happens to your machine while performing above said tasks. I also do not guarantee the proper working of the code/instructions. But I will be glad to help you in any way I can.

Have fun !
