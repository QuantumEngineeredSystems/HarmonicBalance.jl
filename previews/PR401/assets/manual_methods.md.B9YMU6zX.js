import{_ as i,C as T,c as n,o as Q,j as t,a,ai as o,G as s,w as r}from"./chunks/framework.XmSq6OIH.js";const v=JSON.parse('{"title":"Methods","description":"","frontmatter":{},"headers":[],"relativePath":"manual/methods.md","filePath":"manual/methods.md"}'),d={name:"manual/methods.md"},m={class:"jldocstring custom-block",open:""},p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},h={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"30.769ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 13600.1 1000","aria-hidden":"true"},c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"17.717ex",height:"2.587ex",role:"img",focusable:"false",viewBox:"0 -893.3 7831 1143.3","aria-hidden":"true"},u={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.534ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 1120 950","aria-hidden":"true"},H={class:"jldocstring custom-block",open:""},y={class:"jldocstring custom-block",open:""};function x(w,e,b,k,_,M){const l=T("Badge");return Q(),n("div",null,[e[27]||(e[27]=t("h1",{id:"methods",tabindex:"-1"},[a("Methods "),t("a",{class:"header-anchor",href:"#methods","aria-label":'Permalink to "Methods"'},"​")],-1)),e[28]||(e[28]=t("p",null,"We offer several methods for solving the nonlinear algebraic equations that arise from the harmonic balance procedure. Each method has different tradeoffs between speed, robustness, and completeness.",-1)),e[29]||(e[29]=t("h2",{id:"Total-Degree-Method",tabindex:"-1"},[a("Total Degree Method "),t("a",{class:"header-anchor",href:"#Total-Degree-Method","aria-label":'Permalink to "Total Degree Method {#Total-Degree-Method}"'},"​")],-1)),t("details",m,[t("summary",null,[e[0]||(e[0]=t("a",{id:"HarmonicBalance.TotalDegree-manual-methods",href:"#HarmonicBalance.TotalDegree-manual-methods"},[t("span",{class:"jlbinding"},"HarmonicBalance.TotalDegree")],-1)),e[1]||(e[1]=a()),s(l,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[17]||(e[17]=o('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TotalDegree</span></span></code></pre></div>',1)),t("p",null,[e[8]||(e[8]=a("The Total Degree homotopy method performs a homotopy ")),t("mjx-container",p,[(Q(),n("svg",h,e[2]||(e[2]=[o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D43B" d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 219 683Q260 681 355 681Q389 681 418 681T463 682T483 682Q499 682 499 672Q499 670 497 658Q492 641 487 638H485Q483 638 480 638T473 638T464 637T455 637Q416 636 405 634T387 623Q384 619 355 500Q348 474 340 442T328 395L324 380Q324 378 469 378H614L615 381Q615 384 646 504Q674 619 674 627T617 637Q594 637 587 639T580 648Q580 650 582 660Q586 677 588 679T604 682Q609 682 646 681T740 680Q802 680 835 681T871 682Q888 682 888 672Q888 645 876 638H874Q872 638 869 638T862 638T853 637T844 637Q805 636 794 634T776 623Q773 618 704 340T634 58Q634 51 638 51Q646 48 692 46H723Q729 38 729 37T726 19Q722 6 716 0H701Q664 2 567 2Q533 2 504 2T458 2T437 1Q420 1 420 10Q420 15 423 24Q428 43 433 45Q437 46 448 46H454Q481 46 514 49Q520 50 522 50T528 55T534 64T540 82T547 110T558 153Q565 181 569 198Q602 330 602 331T457 332H312L279 197Q245 63 245 58Q245 51 253 49T303 46H334Q340 38 340 37T337 19Q333 6 327 0H312Q275 2 178 2Q144 2 115 2T69 2T48 1Q31 1 31 10Q31 12 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(888,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1277,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1849,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2293.7,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2654.7,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(3321.4,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(4377.2,0)"><path data-c="1D6FE" d="M31 249Q11 249 11 258Q11 275 26 304T66 365T129 418T206 441Q233 441 239 440Q287 429 318 386T371 255Q385 195 385 170Q385 166 386 166L398 193Q418 244 443 300T486 391T508 430Q510 431 524 431H537Q543 425 543 422Q543 418 522 378T463 251T391 71Q385 55 378 6T357 -100Q341 -165 330 -190T303 -216Q286 -216 286 -188Q286 -138 340 32L346 51L347 69Q348 79 348 100Q348 257 291 317Q251 355 196 355Q148 355 108 329T51 260Q49 251 47 251Q45 249 31 249Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(4920.2,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(5281.2,0)"><path data-c="1D43A" d="M50 252Q50 367 117 473T286 641T490 704Q580 704 633 653Q642 643 648 636T656 626L657 623Q660 623 684 649Q691 655 699 663T715 679T725 690L740 705H746Q760 705 760 698Q760 694 728 561Q692 422 692 421Q690 416 687 415T669 413H653Q647 419 647 422Q647 423 648 429T650 449T651 481Q651 552 619 605T510 659Q492 659 471 656T418 643T357 615T294 567T236 496T189 394T158 260Q156 242 156 221Q156 173 170 136T206 79T256 45T308 28T353 24Q407 24 452 47T514 106Q517 114 529 161T541 214Q541 222 528 224T468 227H431Q425 233 425 235T427 254Q431 267 437 273H454Q494 271 594 271Q634 271 659 271T695 272T707 272Q721 272 721 263Q721 261 719 249Q714 230 709 228Q706 227 694 227Q674 227 653 224Q646 221 643 215T629 164Q620 131 614 108Q589 6 586 3Q584 1 581 1Q571 1 553 21T530 52Q530 53 528 52T522 47Q448 -22 322 -22Q201 -22 126 55T50 252Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6067.2,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(6456.2,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(7028.2,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(7639.4,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(8639.7,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(9028.7,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(9750.9,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(10751.1,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(11112.1,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(11501.1,0)"><path data-c="1D439" d="M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(12250.1,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(12639.1,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(13211.1,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>',1)]))),e[3]||(e[3]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"H"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",null,","),t("mi",null,"t"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("mi",null,"γ"),t("mi",null,"t"),t("mi",null,"G"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",{stretchy:"false"},")"),t("mo",null,"+"),t("mo",{stretchy:"false"},"("),t("mn",null,"1"),t("mo",null,"−"),t("mi",null,"t"),t("mo",{stretchy:"false"},")"),t("mi",null,"F"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",{stretchy:"false"},")")])],-1))]),e[9]||(e[9]=a(" from the trivial polynomial system ")),t("mjx-container",c,[(Q(),n("svg",g,e[4]||(e[4]=[o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D439" d="M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(749,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1138,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1710,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2376.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3432.6,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="msup" transform="translate(4004.6,0)"><g data-mml-node="mi"><text data-variant="italic" transform="scale(1,-1)" font-size="884px" font-family="serif" font-style="italic">ᵢ</text></g><g data-mml-node="TeXAtom" transform="translate(633,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(520,0)"><text data-variant="italic" transform="scale(1,-1)" font-size="884px" font-family="serif" font-style="italic">ᵢ</text></g></g></g><g data-mml-node="mo" transform="translate(5701.7,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(6702,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(7231,0)"><text data-variant="italic" transform="scale(1,-1)" font-size="884px" font-family="serif" font-style="italic">ᵢ</text></g></g></g>',1)]))),e[5]||(e[5]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"F"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("mi",null,"x"),t("msup",null,[t("mi",null,"ᵢ"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"d"),t("mi",null,"ᵢ")])]),t("mo",null,"+"),t("mi",null,"a"),t("mi",null,"ᵢ")])],-1))]),e[10]||(e[10]=a(" with the maximal degree ")),t("mjx-container",u,[(Q(),n("svg",f,e[6]||(e[6]=[o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(520,0)"><text data-variant="italic" transform="scale(1,-1)" font-size="884px" font-family="serif" font-style="italic">ᵢ</text></g></g></g>',1)]))),e[7]||(e[7]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"d"),t("mi",null,"ᵢ")])],-1))]),e[11]||(e[11]=a(" determined by the ")),e[12]||(e[12]=t("a",{href:"https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem",target:"_blank",rel:"noreferrer"},"Bezout bound",-1)),e[13]||(e[13]=a(". The method guarantees to find all solutions, however, it comes with a high computational cost. See ")),e[14]||(e[14]=t("a",{href:"https://www.juliahomotopycontinuation.org/guides/totaldegree/",target:"_blank",rel:"noreferrer"},"HomotopyContinuation.jl",-1)),e[15]||(e[15]=a(" for more information."))]),e[18]||(e[18]=o("<p><strong>Fields</strong></p><ul><li><p><code>gamma::Complex</code>: Complex multiplying factor of the start system G(x) for the homotopy</p></li><li><p><code>thread::Bool</code>: Boolean indicating if threading is enabled.</p></li><li><p><code>tracker_options::HomotopyContinuation.TrackerOptions</code>: Options for the tracker.</p></li><li><p><code>endgame_options::HomotopyContinuation.EndgameOptions</code>: Options for the endgame.</p></li><li><p><code>compile::Union{Bool, Symbol}</code>: Compilation options.</p></li><li><p><code>seed::UInt32</code>: Seed for random number generation.</p></li></ul>",2)),s(l,{type:"info",class:"source-link",text:"source"},{default:r(()=>e[16]||(e[16]=[t("a",{href:"https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/c3f4b3349ed3d6e03622f9b06dabc39d6e0dfaf1/src/methods.jl#L8-L20",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e[30]||(e[30]=t("h2",{id:"Polyhedral-Method",tabindex:"-1"},[a("Polyhedral Method "),t("a",{class:"header-anchor",href:"#Polyhedral-Method","aria-label":'Permalink to "Polyhedral Method {#Polyhedral-Method}"'},"​")],-1)),t("details",H,[t("summary",null,[e[19]||(e[19]=t("a",{id:"HarmonicBalance.Polyhedral-manual-methods",href:"#HarmonicBalance.Polyhedral-manual-methods"},[t("span",{class:"jlbinding"},"HarmonicBalance.Polyhedral")],-1)),e[20]||(e[20]=a()),s(l,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[22]||(e[22]=o('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Polyhedral</span></span></code></pre></div><p>The Polyhedral homotopy method constructs a homotopy based on the polyhedral structure of the polynomial system. It is more efficient than the Total Degree method for sparse systems, meaning most of the coefficients are zero. It can be especially useful if you don&#39;t need to find the zero solutions (<code>only_non_zero = true</code>), resulting in a speed up. See <a href="https://www.juliahomotopycontinuation.org/guides/polyhedral/" target="_blank" rel="noreferrer">HomotopyContinuation.jl</a> for more information.</p><p><strong>Fields</strong></p><ul><li><p><code>only_non_zero::Bool</code>: Boolean indicating if only non-zero solutions are considered.</p></li><li><p><code>thread::Bool</code>: Boolean indicating if threading is enabled.</p></li><li><p><code>tracker_options::HomotopyContinuation.TrackerOptions</code>: Options for the tracker.</p></li><li><p><code>endgame_options::HomotopyContinuation.EndgameOptions</code>: Options for the endgame.</p></li><li><p><code>compile::Union{Bool, Symbol}</code>: Compilation options.</p></li><li><p><code>seed::UInt32</code>: Seed for random number generation.</p></li></ul>',4)),s(l,{type:"info",class:"source-link",text:"source"},{default:r(()=>e[21]||(e[21]=[t("a",{href:"https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/c3f4b3349ed3d6e03622f9b06dabc39d6e0dfaf1/src/methods.jl#L57-L69",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})]),e[31]||(e[31]=t("h2",{id:"Warm-Up-Method",tabindex:"-1"},[a("Warm Up Method "),t("a",{class:"header-anchor",href:"#Warm-Up-Method","aria-label":'Permalink to "Warm Up Method {#Warm-Up-Method}"'},"​")],-1)),t("details",y,[t("summary",null,[e[23]||(e[23]=t("a",{id:"HarmonicBalance.WarmUp-manual-methods",href:"#HarmonicBalance.WarmUp-manual-methods"},[t("span",{class:"jlbinding"},"HarmonicBalance.WarmUp")],-1)),e[24]||(e[24]=a()),s(l,{type:"info",class:"jlObjectType jlType",text:"Type"})]),e[26]||(e[26]=o('<div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">WarmUp</span></span></code></pre></div><p>The Warm Up method prepares a warmup system with the Total Degree method using the parameter at <code>index</code> perturbed by <code>perturbation_size</code>. The warmup system is used to perform a homotopy using all other systems in the parameter sweep. It is very efficient for systems with minimal bifurcation in the parameter sweep. The Warm Up method should in theory guarantee to find all solutions, however, if the <code>start_parameters</code> is not proper (to close to the real line) it could miss some solutions.</p><p>See<a href="https://www.juliahomotopycontinuation.org/guides/many-systems/" target="_blank" rel="noreferrer">HomotopyContinuation.jl</a> for more information.</p><p><strong>Fields</strong></p><ul><li><p><code>warm_up_method::Union{Polyhedral{T}, TotalDegree{T}} where T</code>: Method used for the warmup system.</p></li><li><p><code>start_parameters::Vector</code>: Start parameters.</p></li><li><p><code>thread::Bool</code>: Boolean indicating if threading is enabled.</p></li><li><p><code>check_zero::Bool</code>: Check if zero is a root</p></li><li><p><code>tracker_options::HomotopyContinuation.TrackerOptions</code>: Options for the tracker.</p></li><li><p><code>endgame_options::HomotopyContinuation.EndgameOptions</code>: Options for the endgame.</p></li><li><p><code>compile::Union{Bool, Symbol}</code>: Compilation options.</p></li><li><p><code>seed::UInt32</code>: Seed for random number generation.</p></li></ul>',5)),s(l,{type:"info",class:"source-link",text:"source"},{default:r(()=>e[25]||(e[25]=[t("a",{href:"https://github.com/NonlinearOscillations/HarmonicBalance.jl/blob/c3f4b3349ed3d6e03622f9b06dabc39d6e0dfaf1/src/methods.jl#L110-L125",target:"_blank",rel:"noreferrer"},"source",-1)])),_:1})])])}const C=i(d,[["render",x]]);export{v as __pageData,C as default};
