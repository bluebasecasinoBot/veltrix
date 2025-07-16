import { __c, __p, __sC, __SYD, SYD_VAR } from "./sydneyDom_v3.js";

__SYD.c_r_p = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;min-height:fit-content;display:flex;justify-content:center;border:1px solid #00C2FF;margin-bottom:30px;" + __sC['pages'](),
            id:"c_r_p"
        },
        [
            __SYD.c_r_pSubHeader()
        ]
    )
}

__SYD.c_r_pSubHeader = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;max-width:1300px;display:flex;flex-direction:column;align-items:center;gap:20px;padding:0 ${__p(["c_r_pSubHeader" , "mobilePadState"],false) ? "10px" : "10px"};`
        },
        [
            __SYD.c_r_p_text1(),
            __SYD.c_r_p_text2(),
            __SYD.c_r_p_text3(),
            __SYD.c_r_p_tabs()
        ],
        {
            createState:{
                stateName:"c_r_pSubHeader",
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


__SYD.c_r_p_text1 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text1.get() + "font-size:15px;font-weight:200;color:#A0AAB8;padding:10px 30px;border:1px solid #00C2FF;border-radius:25px;"
        },
        [
            __c(
                "p",
                {},["Highly Trusted & Experienced Elite Developer"]
            )
        ]
    )
}


__SYD.c_r_p_text2 = () =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page2Text2.get() + "color:#E6EDF3;"
        },
        [
            __c(
                "p",
                {},["1000+ Trusted Users"]
            )
        ]
    )
}


__SYD.c_r_p_text3 = () =>{
    return __c(
        "div",
        {},
        [
            __c("p" , {style:`${SYD_VAR.pag1SubText.get()} text-align:center;color:#A0AAB8;`},["Our customers are satisfied with our high-quality work and prompt customer support."])
        ]
    )
}

__SYD.c_r_p_text4 = (textContent , add = true) =>{
    return __c(
        "div",
        {
            style:SYD_VAR.page3Text4.get() + "text-align:center;",
            class:add ? "subtle-hover" : ""
        },
        [
            __c(
                "p",
                {},[`${textContent}`]
            )
        ]
    )
}


__SYD.c_r_p_text5 = (textContent) =>{
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

__SYD.c_r_p_tabs = () =>{
    return  __c(
        "div",
        {
            style:"display:flex;gap:50px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;margin-top:15px;"
        },
        [
            __SYD.c_r_p_tab(
                {content:`VeltrixBot changed the way I trade completely. I now get alerts and execute orders right from Telegram. It feels like having a mini hedge fund in my pocket.` ,title:`Amara O. – Crypto Enthusiast (Nigeria)` , likes:4}
            ),
            __SYD.c_r_p_tab({
                content:`Setting up my AI strategy with zero code was crazy smooth. Veltrix feels like the future of accessible algorithmic trading.`,title:`Jules Tan – Software Developer (Singapore)` , likes:5
            }),
            __SYD.c_r_p_tab({
                content:`I used to spend hours on dashboards. Veltrix lets me manage trades on the go without leaving Telegram. Simple, clean, effective.`,title:`Liam R. – DeFi Trader (UK)` , likes:4
            }),
            __SYD.c_r_p_tab({
                content:`As someone new to crypto, Veltrix made it less intimidating. The AI suggestions actually helped me avoid dumb trades.`,title:`Zara K. – First-time Investor (UAE)` , likes:5
            }),
            __SYD.c_r_p_tab({
                content:`I tested it against my manual setups — Veltrix kept up and even outperformed during volatile moves. Insane.`,title:`Daniel M. – Market Analyst (USA)` , likes:5
            }),
            __SYD.c_r_p_tab({
                content:`The AI feels like ChatGPT for crypto trading — intuitive and context-aware. Telegram-based automation is such a power move.`,title:` Ibrahim A. – Tech Blogger (India)` , likes:5
            }),
            __SYD.c_r_p_tab({
                content:`Even when I’m deep in NFT land, Veltrix helps me monitor my altcoin portfolio without switching apps. Super convenient!`,title:`Chidera N. – NFT Collector (Nigeria)` , likes:5
            }),
            __SYD.c_r_p_tab({
                content:`I’ve tried a bunch of bots, but none felt this sleek. Veltrix nailed the balance between power and usability.`,title:`Marco P. – Day Trader (Italy)` , likes:4
            }),
            __SYD.c_r_p_tab({
                content:`I don’t have time to stare at charts all day. Veltrix watches the markets while I run my business. Win-win.`,title:`Sophia G. – Startup Founder (Germany)` , likes:4
            }),
            __SYD.c_r_p_tab({
                content:`Veltrix looks good and works even better. The interface is smooth and the AI trade recommendations are 🔥.`,title:`Yusuf B. – Freelance Designer (Turkey)` , likes:5
            })
        ]
    )
}


__SYD.c_r_p_tab = ({title = '' , content = '' , likes = 5}) =>{
    return __c(
        'div',
        {
            style:`width:calc(100% - 20px);max-width:${__p(["c_r_pSubHeader" , "__flex_child"],"row") === "row" ? "280px" : "450px"};height:fit-content;border-radius:10px;padding:30px 0;cursor:pointer;position:relative;`,
            class:"buy_tabs"
        },
        [
            __c(
                'div',
                {
                    style:`height:fit-content;min-height:unset;padding:10px 20px;width:100%;background:unset;display:flex;align-items:flex-start;column-gap:40px;row-gap:20px;flex-direction:column;`
                },
                [
                    __c(
                        "div",
                        {
                            style:"height:fit-content;width:100%;color:#A0AAB8;",
                            // class:"c_r_p_tab"
                        },
                        [
                            content
                        ]
                    ),
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;flex-direction:column;gap:10px;'
                        },
                        [
                            __c(
                                "p",
                                {
                                    style:"font-weight:600;font-size:18px;color:#E6EDF3;"
                                },
                                [
                                    title
                                ]
                            ),
                            __c(
                                "div",
                                {
                                    style:"display:flex;gap:3px;align-items:center;justify-content:flex-start;"
                                },
                                [
                                    ...(() =>{
                                        const el = [];
                                        for(let i = 0; i < likes; i++)
                                        {
                                            el.push(__c("span",{style:"height:20px;width:20px;background-image:url(./assets/star.png);"},[],{genericStyle:["bg_fit"]}));
                                        }
                                        return el;
                                    })()
                                ]
                            )
                        ]
                    )
                ]
            )
        ],
        {}
    )
}