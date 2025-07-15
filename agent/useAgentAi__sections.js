import { __c, __g, __p, __SYD, __u, __v, SYD_VAR } from "../sydneyDom_v3.js";


__SYD.userAgentAi__sections_main = () =>{
    return __c(
        "div",
        {
            style:`height:100vh;width:100%;display:${__p(["userAgentAi__sections_main" , "display"] , false) ? "flex" : "none"};justify-content:center;align-items:center;position:relative;flex-direction:column;`
        },
        [
            __SYD.fetchAgent(),
            __SYD.agent_use_chat_main(),
            __SYD.Agent__access__page__edit_use()
        ],
        {
            createState:{
                stateName:"userAgentAi__sections_main",
                state:{
                    display:false,
                    section1:false,
                    section2:false,
                    agentVerification:false,
                    agentMessage:[],
                    userMessage:[],
                    updateAgentMessage:(msg) =>{
                        const state = __g("userAgentAi__sections_main");
                        state.agentMessage.push(msg);
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    updateUserMessage:(msg) =>{
                        const state = __g("userAgentAi__sections_main");
                        state.userMessage.push(msg);
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    clearAllChats:() =>{
                        const state = __g("userAgentAi__sections_main");
                        state.userMessage = [];
                        state.agentMessage = [];
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    setAgentVerification: (val) =>{
                        const state = __g("userAgentAi__sections_main");
                        state.agentVerification = val;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    display_func:() =>{
                        const state = __g("userAgentAi__sections_main");
                        state.display = true;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    remove_display_func:() =>{
                        const state = __g("userAgentAi__sections_main");
                        state.display = false;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    display_section_1:() =>{
                        const state = __g("userAgentAi__sections_main");
                        state.section1 = true;
                        state.section2 = false;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    display_section_2:() =>{
                        const state = __g("userAgentAi__sections_main");
                        state.section1 = false;
                        state.section2 = true;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editName:(name) =>{
                        const state = __g("userAgentAi__sections_main");
                        state.userInfo.agentName = name;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editPersonality:(value) =>{
                        const state = __g("userAgentAi__sections_main");
                        state.userInfo.personality = value;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editResponseTone:(value) =>{
                        const state = __g("userAgentAi__sections_main");
                        state.userInfo.responseTone = value;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editExpertise:(value) =>{
                        const state = __g("userAgentAi__sections_main");
                        state.userInfo.expertise = value;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editResponseFormat:(value) =>{
                        const state = __g("userAgentAi__sections_main");
                        state.userInfo.responseFormat = value;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    editAskQuestion:(value) =>{
                        const state = __g("userAgentAi__sections_main");
                        state.userInfo.askQuestion = value;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    massUpdateAgentInfo:(info) =>{
                        const state = __g("userAgentAi__sections_main");
                        state.agentLoginInfo = info;
                        __u(
                            "userAgentAi__sections_main",
                            {type:"a" , value:state}
                        )
                    },
                    agentLoginInfo:{
                        agentName:"",
                        personality:"",
                        responseTone:"",
                        expertise:"",
                        responseFormat:"",
                        askQuestion:"",
                        trackingID:""
                    }
                }
            }
        }
    )
}

__SYD.fetchAgent = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;min-height:fit-content;max-width:600px;width:90%;border-radius:20px;display:${__p(["userAgentAi__sections_main" , "section1"] , false) ? "flex" : "none"};justify-content:center;align-items:center;row-gap:30px;padding:30px 30px;flex-direction:column;background-color: #000000 ;border: 1px solid grey;`
        },
        [
            __c(
                "h1",
                {style:`color:#fff;text-align:center;font-family:shine;text-shadow:2px 2px 1px #141414;position:relative;font-size:${__p(["subContainer" , "scaleIntro"] , false) ? "30px" : "35px"}` , class:""},
                [
                    "Access Agent"
                ]
            ),
            __c(
                "p",
                {
                    style:`font-size:${__p(["subContainer" , "scaleIntro"] , false) ? "15px" : "17px"};text-align:center;font-weight:500;line-height:25px;white-space: pre-line;text-shadow:1px 1px 2px #000;`
                },
                [
                    "Enter agent name or ID name to access customised agent "
                ]
            ),
            __SYD.infoSection___accessAgent({text:"Agent Name or Agent ID" , ph:"agent name or ID"}),
            __c(
                "div",
                {
                    style:`display:${__p(["fetchAgent" , "text_animation"],false) ? "block" : "none"}`,
                    class:"text_opacity_animation"
                },
                [
                    __c("p" , {style:"font-family:monospace;"} , ["Please Wait , Verifying Agent  ..."])
                ]
            ),
            __SYD.verify_agent(), //Found in route Files
            __c(
                "div",
                {
                    style:`color:lightgreen;display:${__p(["userAgentAi__sections_main" , "agentVerification"],false) ? "block" : "none"}`,
                },
                [
                    __c("p" , {style:"font-family:monospace;"} , ["Agent Verified ✅"])
                ]
            ),
        ],
        {
            createState:{
                stateName:"fetchAgent",
                state:{
                    text_animation:false,
                    verifyingAgent:false,
                    startVerifyingAgentAnimation:() =>{
                        const state = __g("fetchAgent");
                        state.text_animation = true;
                        state.verifyingAgent = true;
                        __u("fetchAgent" , {type:"a" , value:state})
                    },
                    stopVerifyingAgentAnimation:() =>{
                        const state = __g("fetchAgent");
                        state.text_animation = false;
                        state.verifyingAgent = false;
                        __u("fetchAgent" , {type:"a" , value:state})
                    }
                }
            }
        }
    )
}

__SYD.infoSection___accessAgent = ({text = "" , ph = ""} = {}) =>{
    return __c(
        "div",
        {
            style:"padding:20px 16px;background:rgb(12 , 12 , 12);display:flex;flex-direction:column;row-gap:10px;border-radius:15px;width:100%;",
            // class:"tab_design_3d_main"
        },
        [
            __c(
                "h2",
                {
                    style:"font-size:16px;color:#fff;font-weight:500;text-transform:capitalize;margin-bottom:16px;font-family:shine;",
                    class:""
                },
                [
                    `${text}`
                ]
            ),
            __SYD.input_type_text({name:"agentname__id" , type:"text" , ph:ph , w:"500" , size:"16px" , inject:"background: #000000 ;box-shadow:unset;font-family:monospace;height:60px;border-radius:inherit;transform:unset;border:1px solid grey;color:#fff;" , cls:"" , fnc:{oninput:e =>{
                __p(['createAI__sections_main' , 'editName'])(e.target.value)
            }} , stateProps:{type:"agentCredinfo"}}),
        ]
    )
}


__SYD.Agent__access__page__edit_use = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;width:100%;padding:16px;position:fixed;left:0%;right:16px;bottom:0px;transform:translateY(0%);display:flex;column-gap:16px;justify-content:space-between;pointer-events:none;flex-direction:row-reverse;align-items:center;z-index:999;"
        },
        [
            __c(
                "div",
                {
                    style:"height:fit-content;width:fit-content;display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end;"
                },
                [
                    __SYD.ul_lists_el({child:__SYD.pTag({text:"" , class_:"clickButton" , style:`${!__p(["userAgentAi__sections_main" , "agentVerification"],false) ? "pointer-events:none;opacity:.4;" : "pointer-events:auto;"}` + SYD_VAR.buttonStyle1.get() + `display:${__p(["userAgentAi__sections_main" , "section2"] , false) ? "none" : "auto"};` , child:[__c("p",{},["Use Agent"])]}) , function_:{
                        onclick:() =>{
                            if(__p(["userAgentAi__sections_main" , "agentVerification"],false))
                            {
                                __p(["userAgentAi__sections_main" , "display_section_2"])()

                                __p(["agent_use_chat_main" , "agentAutoTypeEffect"])()
                            }
        
                            // if(Object.keys(__p(['createAI__sections_main','userInfo'])).every(val =>{return __p(['createAI__sections_main','userInfo'])[val].length > 0}))
                            // {
                            //     __p(["popUp" , "displayText"])("Agent customisation complete ✅");
        
                            //     __p(["createAI__sections_main" , "display_section_2"])();
        
                            // }else 
                            // {
                            //     __p(["popUp" , "displayText"])("Please complete the customisation form 😢" , "warn");
                            // }
        
                        }
                    }}),
                    __SYD.ul_lists_el({child:__SYD.pTag({text:"" , class_:"clickButton" , style:`${!__p(["userAgentAi__sections_main" , "agentVerification"],false) ? "pointer-events:none;opacity:.4;" : "pointer-events:auto;"}` + SYD_VAR.buttonStyle1.get() + `display:${__p(["userAgentAi__sections_main" , "section2"] , false) ? "none" : "auto"};` , child:[__c("p",{},["Edit Agent"])]}) , function_:{
                        onclick:() =>{
                            if(__p(["userAgentAi__sections_main" , "agentVerification"],false))
                            {
                                __p(["popUp" , "displayText"])("Comming soon 😏");
                            }
                            // __p(['createIntro_tabMain' , 'display_func'])();
        
                            // __p(['createAI__sections_main' , 'remove_display_func'])();//disablePopUp
        
                            // __p(['popUp' , 'disablePopUp'])();
                        }
                    }})
                ]           
            ),
            __SYD.ul_lists_el({child:__SYD.pTag({text:"" , class_:"clickButton" , style:SYD_VAR.buttonStyle1.get() + "pointer-events:auto;" , child:[__c("p",{},["Menu"])]}) , function_:{
                onclick:() =>{
                    __p(['createIntro_tabMain' , 'display_func'])();

                    __p(['userAgentAi__sections_main' , 'remove_display_func'])();//disablePopUp

                    __p(['popUp' , 'disablePopUp'])();
                }
            }})
        ]
    )
}