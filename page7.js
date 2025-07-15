import { __c, __g, __p, __sC, __SYD, __u, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p7 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;border:1px solid #00C2FF;margin-bottom:30px;` + __sC['pages']() + "paddingBottom:unset;",
            id:"p7"
        },
        [
            __SYD.p7SubHeader()
        ],{genericStyle:["bg_cover"]}
    )
}

__SYD.p7SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p7SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};`
        },
        [
            // __SYD.p7_text1(),
            __SYD.p7_text2(),
            __SYD.p7_text3(),
            __c(
                "div",
                {
                    style:`height:100%;width:100%;max-width:1300px;display:flex;align-items:center;gap:20px;padding:0 ${__p(["p7SubHeader" , "mobilePadState"],false) ? "10px" : "60px"};flex-direction:${__p(["p7SubHeader" , "breakVal"],false) ? "column" : "row"}`
                },
                [
                    __c(
                        "div",
                        {
                            style:`height:100vw;max-height:calc(100vh - 150px);width:${__p(["p7SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;flex-direction:column;gap:20px;background-image:url("./assets/main_think.png")`
                        },[],{genericStyle:["bg_fit"]}
                    ),
                    __c(
                        "div",
                        {
                            style:`height:fit-content;width:${__p(["p7SubHeader" , "breakVal"],false) ? "100%" : "50%"};display:flex;justify-content:center;`
                        },
                        [
                            __SYD.faqsQuestionaire()
                        ]
                    ),
                ]
            )
        ],
        {
            createState:{
                stateName:"p7SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row',
                    resize:false,
                    breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<1000px" , prop:{breakVal:true}},
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column' , resize:true}},
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row' , resize:false , breakVal:false}
            }
        }
    )
}

__SYD.p7_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["frequently asked questions"]
            )
        ]
    )
}


__SYD.p7_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#E6EDF3;"
        },
        [
            __c(
                "p",
                {},["frequently asked questions"]
            )
        ]
    )
}


__SYD.p7_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;color:#A0AAB8;`},["New to Alita AI? You’re not alone—and that’s exactly the point. We built this platform to welcome everyone, from Solana natives to total crypto rookies. Whether you’re curious about our tech, the token, or just how to start building your own AI, this section breaks it all down. No jargon, no fluff—just real answers for real rebels."])
        ]
    )
}

__SYD.p7_text4 = (textContent) =>{
    return __c(
        "p",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} padding:10px 20px;color:#A0AAB8;`},[textContent])
        ]
    )
}

__SYD.faqsQuestionaire = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;max-width:700px;display:flex;flex-direction:column;row-gap:10px;padding-top:50px;"
        },
        [
            __SYD.questionTab({
                question:"What exactly is Veltrix?",
                answer:"Veltrix is an AI-powered trading platform that automates trading decisions using advanced algorithms and delivers control through a seamless Telegram bot interface. It’s designed for both new and experienced traders looking for smarter, faster execution.",
                index:0
            }),
            __SYD.questionTab({
                question:"Do I need to know how to trade or code?",
                answer:"Not at all. Veltrix offers plug-and-play strategies, intuitive controls, and a Telegram-based assistant that makes managing your trades simple — no coding or technical experience required.",
                index:1
            }),
            __SYD.questionTab({
                question:"Is my exchange account safe with Veltrix?",
                answer:"Yes. Veltrix uses secure, encrypted API integrations to connect with your exchange. Your funds remain on your exchange — Veltrix only sends trade instructions, never holds assets directly.",
                index:2
            }),
            __SYD.questionTab({
                question:"Can I run Veltrix 24/7?",
                answer:"Absolutely. Once set up, your Veltrix AI agent runs continuously in the background, monitoring markets and executing trades based on your strategy — even while you sleep.",
                index:3
            }),
            __SYD.questionTab({
                question:"Which exchanges are supported?",
                answer:"Veltrix currently supports major exchanges like Binance, KuCoin, Bybit as well as other tokens on the Etheruem chain. More integrations are coming soon as part of our roadmap.",
                index:4
            })

        ],
        {
            createState:{
                stateName:"faqsQuestionaire",
                state:{
                    currentOpen:-1,
                    height:"0px"
                }
            }
        }
    )
}

__SYD.questionTab = ({
    question = "hello world",
    answer = "answer to hello world",
    index = 0
} = {}) =>{
    return __c(
        "div",
        {
            style:"display:flex;flex-direction:column;width:100%;color:#000;font-size:18px;"
        },
        [
            __c(
                "div",
                {
                    style:"height:60px;width:100%;cursor:pointer;padding:10px 20px;align-items:center;display:flex;position:relative;font-weight:300;border:3px solid #0B0A1D;border-radius:15px;color:#fff;background:#121829;font-size:16px;"
                },
                [
                    question,
                    __c(
                        "i",
                        {
                            style:`position:absolute;top:50%;transform:translateY(-50%) rotate(${__p(["faqsQuestionaire" , "currentOpen"],-1) === index ? "180deg" : "0deg"});right:15px;pointer-events:none;transition:transform linear .3s;`,
                            class:"fa-solid fa-chevron-down"
                        }
                    )

                ],
                {
                    events:{
                        onclick:e =>{
                            let update__;
                            if(__p(["faqsQuestionaire" , "currentOpen"]) !== index)
                            {
                                update__ = index
                            }else update__ = -1;

                            const state = __g("faqsQuestionaire");
                            state.currentOpen = update__;
                            state.height = getComputedStyle(e.target.parentElement.querySelector(".foldTab p")).height
                            __u("faqsQuestionaire" , {type:"a" , value:state});
                        }
                    }
                }
            ),
            __c(
                "div",
                {
                    style:`height:${__p(["faqsQuestionaire" , "currentOpen"],-1) === index ? __p(["faqsQuestionaire" , "height"],"0px") : "0px"};width:100%;transition:all linear .3s;overflow:hidden;`,
                    class:"foldTab"
                },
                [
                    __SYD.p7_text4(answer)
                ]
            )
        ]
    )
}