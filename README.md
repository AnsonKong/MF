# module-federation-demo-2

## Reproduction steps:


`yarn`

`cd app1 & yarn & yarn start`

`cd app2 & yarn & yarn start`

and go `http://localhost:3001`, click the `print app2 config` button. will print current app2’s config. 


and then click the button above, the entry address of app3 and app4 will add to app2's mf_instance by **app1's init** 

I can control the app1's instance and app2's instance just use **app1's init** (window.__myInit),  that because the current app1 is not build via MF_Plugin.


and then we use `app1-via-build` to replace app1, `cd app1-via-build & yarn & yarn start`, and do the same steps above, but now, it's not work, that because the app1-via-build is build by MF_Plugin.



This is what makes me confused, The only difference between app1 and app1-via-build is Whether compile&build through MF_Plugin.


Need we should keep the behavior of these two cases consistent?
