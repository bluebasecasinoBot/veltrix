import { __c, __g, __p, __SYD, __u, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.navBar = () =>{
    return __c(
        "nav",
        {
            style:`overflow-y:hidden;position:absolute;left:50%;transform:translateX(-50%);min-height:90px;max-height:${__p(["navBar" , "mobileNavExpand"], false) ? "700px" : "90px"};width:100%;border-radius:15px;padding:15px ${__p(["navBar" , "mobilePadState"], false) ? "10px" : "50px"};background: transparent;transition:all ease-out .4s;display:flex;align-items:flex-start;z-index:999;`
        },
        [
            __SYD.navLogo(),
            __SYD.mobileMenuLogo(),
            __SYD.desktopNav(),
            __SYD.mobileNav()
        ],
        {
            createState:{
                stateName:"navBar",
                state:{
                    desktopMode:true,
                    mobileNavExpand:false,
                    mobilePadState:false,
                    utils_drop_m1:false,
                    utils_drop_m2:false,
                }
            },
            mediaQuery:{
                query:[
                    {size:"<400px" , prop:{mobilePadState:true}},
                    {size:"<1000px" , prop:{desktopMode:false}},
                ],
                defState:{desktopMode:true , mobilePadState:false}
            }
        }
    )
}

__SYD.navLogo = () =>{
    return __c(
        "a",
        {
            style:`min-height:50px;min-width:50px;position:absolute;top:21px;left:${__p(["navBar" , "mobilePadState"], false) ? "30px" : "50px"};background-image:url("./assets/logo.png");border-radius:50%;`,
            href:"#"
        },[],{genericStyle:["bg_cover"]}
    )
}

__SYD.mobileMenuLogo = () =>{
    return __c(
        "div",
        {
            style:`height:40px;width:60px;position:absolute;top:21px;right:${__p(["navBar" , "mobilePadState"], false) ? "30px" : "50px"};background-color:transparent;border:1px solid #015484;border-radius:5px;display:${__p(["navBar" , "desktopMode"],true) ? "none" : "block"};cursor:pointer;background-image:url(./assets/menu.png);background-size:45%;`
        },[],
        {
            genericStyle:['bg_cover'],
            events:{
                onclick:e =>{
                    const state = __g("navBar");
                    state.mobileNavExpand = state.mobileNavExpand === true ? false : true;
                    __u("navBar" , {type:"a" , value:state})
                }
            }
        }
    )
}

__SYD.mobileNav = () =>{
    return __c(
        "div",
        {
            style:`min-height:90px;padding-top:90px;height:80vh;display:${__p(["navBar" , "desktopMode"],true) ? "none" : "block"};width:100%;`
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;height:100%;margin-top:${__p(["navBar" , "mobileNavExpand"], false) ? "0px" : "0px"};padding:20px 25px;display:flex;background:#022337ff ;flex-direction:column;justify-content:space-between;`
                },
                [
                    __c(
                        "div",
                        {
                            style:"display:flex;flex-direction:column;gap:30px;"
                        },
                        [
                            __SYD.desktopNav_textContent_text({val:"Home" , ref:"#p1" , clr:"#02819d"}),
                            __SYD.utils_dropDown(),
                            __SYD.desktopNav_textContent_text({val:"Docs" , ref:"https://devbatsys-organization.gitbook.io/synthia/~/changes/1" , clr:"#02819d"}),
                        ]
                    ),
                    // __SYD.desktopNav_textContent_text({val:"tokenomics" , ref:"p6"}),
                    // __SYD.desktopNav_textContent_text({val:"FAQ" , ref:"p7"}),
                    // __SYD.desktopNav_textContent_text({val:"contact" , ref:"footer"}),
                    __SYD.desktopNav_button()
                ]
            )
        ]
    )
}

__SYD.desktopNav = () =>{
    return __c(
        "div",
        {
            style:`height:82px;width:100%;display:${__p(["navBar" , "desktopMode"],true) ? "flex" : "none"};gap:50px;align-items:center;justify-content:flex-end;padding-right:50px;`
        },
        [
            __SYD.desktopNav_textContent(),
            __SYD.desktopNav_button()
        ]
    )
}

__SYD.desktopNav_textContent = () =>{
    return __c(
        "div",
        {
            style:"display:flex;align-items:center;justify-content:center;gap:30px;"
        },
        [
            __SYD.desktopNav_textContent_text({val:"Home" , ref:"#p1"}),
            __SYD.utils_dropDown(),
            __SYD.desktopNav_textContent_text({val:"Docs" , ref:"https://devbatsys-organization.gitbook.io/synthia/~/changes/1"}),
            // __SYD.desktopNav_textContent_text({val:"tokenomics" , ref:"p6"}),
            // __SYD.desktopNav_textContent_text({val:"FAQ" , ref:"p7"}),
            // __SYD.desktopNav_textContent_text({val:"contact" , ref:"footer"}),
        ]
    )
}

__SYD.utils_dropDown = () =>{
    return __c(
        "div",
        {
            style:"display:flex;gap:5px;position:relative;cursor:pointer;width:fit-content;"
        },
        [
            __c(
                "p",
                {},[__c("a",{class:"subtle-hover" , style:"text-decoration:none;font-weight:700;" , href:"#"},["Utilities"])]
            ),
            __c("span",{style:`height:20px;width:20px;background-image:url(./assets/drop.png);transition:all linear .3s;transform:rotate(${__p(["navBar" , "utils_drop_m1"],false) ? "180deg" : "0deg"})`},[],{genericStyle:["bg_fit"]}),
            __c(
                "div",
                {
                    style:`padding:7px 15px;border-radius:10px;position:absolute;height:fit-content;width:max-content;background:#015484;border:1px solid #000000;bottom:-50%;left:calc(100% + 0px);display:${__p(["navBar" , "utils_drop_m1"],false) ? "flex" : "none"};flex-direction:column;gap:15px;`,
                    class:"tab-entry",
                },
                [
                    // __SYD.desktopNav_textContent_text({val:"Ai-agent" , ref:"#" , tic:300}),
                    // __SYD.desktopNav_textContent_text({val:"Trading Bot" , ref:"#" , tic:300}),
                    __c(
                        "p",
                        {},[__c("a",{class:"subtle-hover" , style:"text-decoration:none;font-weight:300;" , href:`/agent/`},["Ai-agent"])]
                    ),
                    __c(
                        "p",
                        {},[__c("a",{class:"subtle-hover" , style:"text-decoration:none;font-weight:300;" , href:"https://t.me/dummy_test_bot_404_bot"},["Trading Bot"])]
                    )
                ]
            )
        ],
        {
            events:{
                onmouseover:e =>{
                    const state = __g("navBar");
                    state.utils_drop_m1 = true;
                    __u("navBar" , {type:"a" , value:state});
                },
                onmouseout:e =>{
                    const state = __g("navBar");
                    state.utils_drop_m1 = false;
                    __u("navBar" , {type:"a" , value:state});
                }
            }
        }
    )
}

__SYD.desktopNav_textContent_text = ({val = "home" , ref , clr = "#ffffff" , tic = 700}) =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:fit-content;"
        },
        [
            __c(
                "a",
                {
                    style:`font-weight:${tic};text-transform:capitalize;font-size:16px;transition:all linear .2s;color:${clr !== undefined ? clr : "#02819d"};`,
                    href:`${ref}`
                },
                [
                    val
                ],
                {
                    events:{
                        onmouseover:e =>{
                            e.target.style.color = "#015484"
                        },
                        onmouseout:e =>{
                            e.target.style.color = clr ? clr : "#02819d"
                        },
                    }
                }
            )
        ]
    )
}

__SYD.desktopNav_button = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.buttonStyle1.get(),
            class:"clickButton"
        },
        [
            __c("p" , {style:"width:fit-content"},["Try Veltrix"])
        ],
        {
            events:{
                onclick:e =>{
                    location.href = '#'
                }
            }
        }
    )
}
