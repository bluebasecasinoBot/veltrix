import { SYD_VAR, __SYD, __c , __p} from "./sydneyDom_v3.js";
import "./icon.js"
import "./text_lib.js"

__SYD.footer_main_parent = () =>{
    const check = __p(["subContainer" , "scaled"],false);

    return __c(
        'div',
        {
            style:`height:fit-content;padding:${check ? "10px 50px" : "10px 10px"};padding-top:20px;padding-bottom:20px;width:100%;display:flex;flex-direction:column;row-gap:40px;padding-bottom:50px;border:1px solid #333;`,
            id:"footer"
        },
        [
            __c(
                'div',
                {
                    style:'display:flex;column-gap:30px;flex-wrap:wrap;row-gap:30px;width:100%;height:fit-content;justify-content:center;align-items:flex-start;'
                },
                [
                    // __SYD.footer_main_child1(),
                    __SYD.footer_main_child2(),
                    // __SYD.footer_main_child3()
                ]
            ),
            // __c('hr',{style:'height:1px;width:100%;background:#000;border-color:#000;'}),
            __c(
                'div',
                {
                    style:'display:flex;padding:10px;justify-content:center;align-items:center'
                },
                [
                    __SYD.text_lib_type_p_glob_vmax({cnt:`© ${new Date().getFullYear()} All Right Reserved`,size:'12px',clr:'#ffffff'})
                ]
            )
        ]
    )
}

__SYD.footer_main_child2 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;height:fit-content;width:50%;min-width:fit-content;flex-direction:column;padding:10px;row-gap:20px;margin-top:50px;align-items:center;'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'Socials' , size:'20px' , w:'700' , inject:'text-decoration:underline;',clr:'#00C2FF'}),
            __c(
                'div',
                {
                    style:'display:flex;column-gap:50px;width:100%;'
                },
                [
                    __c(
                        'div',
                        {
                            style:'height:fit-content;width:100%;justify-content:space-between;display:flex;flex-direction:row;row-gap:20px;'
                        },[
                            __c(
                                'div',
                                {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center'},
                                [
                                    __SYD.iconify_20px({attr:'fa-brands fa-x-twitter' , clr :'#00C2FF'}),//<i class="fa-solid fa-envelope-open-text"></i>
                                    __c('a',{href:"https://x.com/synthiasyai"},[__SYD.text_lib_type_p_glob_vmax({cnt:'Twitter', size:'14px' , w:'500',clr:'#00C2FF'})]),
                                ]
                            ),
                
                            __c(
                                'div',
                                {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center'},
                                [
                                    __SYD.iconify_20px({attr:'fa-brands fa-telegram' , clr :'#00C2FF'}),//<i class="fa-solid fa-phone-volume"></i>
                                    __c('a',{href:"https://t.me/synthAI_eth"},[__SYD.text_lib_type_p_glob_vmax({cnt:'Telegram', size:'14px' , w:'500',clr:'#00C2FF'})]),
                                ]
                            ),
                
                            // __c(
                            //     'div',
                            //     {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center;max-width:400px;'},
                            //     [
                            //         __SYD.iconify_20px({clr:'#ffc2cbbb' , attr:'fa-solid fa-location-dot'}),//<i class="fa-solid fa-location-dot"></i>
                            //         __SYD.text_lib_type_p_glob_vfit({cnt:'Ivviera main address', size:'14px' , w:'500',clr:'#fff'})
                            //     ]
                            // ),
                        ]
                    )
                ]
            )
        ]
    )
}

__SYD.footer_main_hyperLink_txt = ({link = '' , cnt = ''} = {}) =>{
    return __c(
        'a',
        {
            href:link
        },
        [
            __SYD.text_lib_type_p_glob_vmax({cnt:cnt, size:'14px',w:'500',clr:'#fff' , inject:"font-weight:700;"})
        ]
    )
}

__SYD.footer_main_child3 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;height:100%;width:30%;min-width:fit-content;background:unset;flex-direction:column;padding:10px;column-gap:30px;row-gap:30px;margin-top:50px'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'Navigate' , size:'20px' , w:'700' , inject:'text-decoration:underline;',clr:'#000'}),
            __c(
                'div',
                {
                    style:'height:fit-content;width:fit-content;display:flex;flex-direction:column;row-gap:20px;'
                },[
                    __SYD.footer_main_hyperLink_txt({link:'#p1',cnt:'Home'}),
                    __SYD.footer_main_hyperLink_txt({link:'#p2',cnt:'About Us'}),
                    __SYD.footer_main_hyperLink_txt({link:'#p5',cnt:'Roadmap'}),
                    // __SYD.footer_main_hyperLink_txt({link:'#p6',cnt:'Tokenomics'}),
                    __SYD.footer_main_hyperLink_txt({link:'#p7',cnt:'FAQ'}),
                ]
            )
        ]
    )
}
