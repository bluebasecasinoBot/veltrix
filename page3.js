import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.p3 = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;border:1px solid #00C2FF;margin-bottom:30px;" + __sC['pages'](),
            id:"p3"
        },
        [
            __SYD.p3SubHeader()
        ]
    )
}

__SYD.p3SubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["p3SubHeader" , "mobilePadState"],false) ? "10px" : "10px"};`
        },
        [
            // __SYD.p3_text1(),
            __SYD.p3_text2(),
            __SYD.p3_text3(),
            __SYD.p3_tabs()
        ],
        {
            createState:{
                stateName:"p3SubHeader",
                state:{
                    mobilePadState:false,
                    caTextSize:"16px",
                    __flex_child:'row'
                    // breakVal:false
                }
            },
            mediaQuery:{
                query:[
                    {size:"<500px" , prop:{mobilePadState:true , caTextSize:"13px"}},
                    {size:"<700px" , prop:{__flex_child:'column'}}
                    // {size:"<1000px" , prop:{breakVal:true}}
                ],
                defState:{mobilePadState:false , caTextSize:"16px" , __flex_child:'row'}//breakVal:false
            }
        }
    )
}


__SYD.p3_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get()
        },
        [
            __c(
                "p",
                {},["Buy $Alita"]
            )
        ]
    )
}


__SYD.p3_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#E6EDF3;"
        },
        [
            __c(
                "p",
                {},["Veltrix Features"]
            )
        ]
    )
}


__SYD.p3_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;color:#A0AAB8;`},["Veltrix blends cutting-edge AI with real-time trading automation to give you total control — without the complexity. From smart bots on Telegram to intelligent strategy builders and live analytics, every feature is crafted to amplify your edge in the market. Welcome to the future of trading — faster, smarter, and always on."])
        ]
    )
}

__SYD.p3_text4 = (textContent) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page3Text4.get() + "text-align:center;",
            class:"subtle-hover"
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}


__SYD.p3_text5 = (textContent) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.pag1SubText.get() + "text-align:center;"
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}

__SYD.p3_tabs = () =>{
    return  __c(
        "div",
        {
            style:"display:flex;gap:50px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;margin-top:15px;"
        },
        [
            __SYD.p3_tab(
                {content:` Download a Solana-compatible wallet like Phantom or Solflare to hold your $ALITA tokens.` ,title:`AI-Powered Trade Automation` , img:"trade_auto.jpg"}
            ),
            __SYD.p3_tab({
                content:`Buy SOL on a centralized exchange (like Binance or Coinbase), then transfer it to your Solana wallet.`,title:`Telegram Bot Integration` , img:"bot_int.jpg"
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Smart Market Insights` , img:"market_insight.jpg"
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Custom Strategy Builder` , img:"strategy_builder.jpg"
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Backtesting Engine` , img:"backtesting.jpg"
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:` Multi-Exchange Support` , img:"multi_swap.jpg"
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`24/7 Autonomous Operation` , img:"autonomy.jpg"
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Risk Management Tools` , img:"risk_manage.jpg"
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Plug & Play Templates` , img:"plug_play.jpg"
            }),
            __SYD.p3_tab({
                content:`Visit a supported DEX (like Jupiter or Raydium), connect your wallet, and swap SOL for $ALITA instantly.`,title:`Web + Mobile Access` , img:"web_mobile.jpg"
            })
        ]
    )
}


__SYD.p3_tab = ({title = '' , content = '' , img = "main"}) =>{
    return __c(
        'div',
        {
            style:`width:calc(100% - 20px);max-width:${__p(["p3SubHeader" , "__flex_child"],"row") === "row" ? "280px" : "450px"};height:fit-content;border-radius:10px;padding:30px 0;cursor:pointer;`,
            class:"buy_tabs"
        },
        [
            __c(
                'div',
                {
                    style:`height:fit-content;min-height:250px;padding:10px 20px;width:100%;background:unset;display:flex;align-items:center;column-gap:20px;row-gap:20px;flex-direction:column;`
                },
                [
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;flex-direction:column;gap:10px;'
                        },
                        [
                            __SYD.p3_text4(title),
                            // __SYD.p3_text5(content)
                        ]
                    ),
                    __c(
                        "div",
                        {
                            style:"height:250px;width:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;",
                            // class:"p3_tab"
                        },
                        [
                            __c(
                                "div",
                                {
                                    style:`width:100%;height:100%;background-color:green;background-image:url(./assets/${img});transition:all linear .3s;`,
                                    class:`img_holder_${img.split(".").join("")}`
                                },[],{genericStyle:["bg_cover"]}
                            ),
                        ]
                    )
                ]
            )
        ],
        {
            events:{
                onmouseover:e =>{
                    const el = document.querySelector(`.img_holder_${img.split(".").join("")}`);
                    el.style.transform = "scale(1.3)";
                },
                onmouseout:e =>{
                    const el = document.querySelector(`.img_holder_${img.split(".").join("")}`);
                    el.style.transform = "scale(1)";
                }
            }
        }
    )
}