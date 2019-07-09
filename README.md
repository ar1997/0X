# 0X
## Notice : This dapp is only a proof of concept, not the whole application.
**This is it. The decentralized web application written in Vue JS and Solidity. 
Done using the VueJS box from truffle. Run as a seperate server away from server 1.**

**_Steps to follow, they have to be followed in the exact order_**

>Make sure that you have the following installed inside your container or globally.
- IPFS
- Truffle
- Ganache
- IPFS Companion (Add-on for both Firefox and Chrome; To redirect requests from the browser to the IPFS node)
- Metamask (Add-on Firefox/Chrome)

```
git clone https://github.com/ar1997/0X
```

CD into the directory 

```
cd server/quack_quack/app-users
```

Check if package-lock.json is present, if so delete it and run the following command, else run it directly anyway.

```
npm install
```

And WAIT. **IT TAKES TIME**

After installation make sure that you have ganache running locally, then go to MetaMask, set up the account. Make sure that it detects and connects to the Ganache network running locally on your machine. Import a few accounts for testing.

>If you want to, you can configure ganache to be detectable over the network and access the application from other devices.

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

If the migration was successful, copy the file **~/server2/build/contracts/Users.json** into the folder **~/server2/app-users/src/assets/**. Now run server 1. After they are both up and running succefully, you can now run the dapp. Using the following command. First cd into the folder app-users and run 

```
npm run dev
```

By default if you have IPFS daemon running on port 8080 let us say that you are using port 8081 for server 1, you should have your dapp running on port 8082. If you are having difficulties regarding redirection from server one to server two simply change port numbers on the web pages and you will be good to go.
