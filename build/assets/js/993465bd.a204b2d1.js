"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[793],{7695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(4848),i=n(8453);const a={},r=void 0,o={id:"Pipeline",title:"Pipeline",description:"alt text",source:"@site/docs/Pipeline.md",sourceDirName:".",slug:"/Pipeline",permalink:"/docs/Pipeline",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ongoing Research",permalink:"/docs/Ongoing Research"},next:{title:"SAM2 on Images",permalink:"/docs/SAM2 on Images"}},c={},l=[{value:"<strong>Pipeline Components</strong>",id:"pipeline-components",level:3},{value:"<strong>Process Flow</strong>",id:"process-flow",level:3},{value:"<strong>Explanation</strong>",id:"explanation",level:3},{value:"<strong>Key Considerations</strong>",id:"key-considerations",level:3},{value:"How to find the lagest area of the mask by sorting the masks",id:"how-to-find-the-lagest-area-of-the-mask-by-sorting-the-masks",level:2},{value:"We can clearly see that the first object the mask with most area and is the required object.",id:"we-can-clearly-see-that-the-first-object-the-mask-with-most-area-and-is-the-required-object",level:4}];function h(e){const t={br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"alt text",src:n(5883).A+"",width:"3164",height:"1220"}),"\n",(0,s.jsx)("p",{children:"Proposed Optimal pipeline"})]}),"\n",(0,s.jsx)(t.h3,{id:"pipeline-components",children:(0,s.jsx)(t.strong,{children:"Pipeline Components"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Video Input"}),"\n",(0,s.jsx)(t.li,{children:"Frame Extraction"}),"\n",(0,s.jsx)(t.li,{children:"Object Detection"}),"\n",(0,s.jsx)(t.li,{children:"Region of Interest (ROI) Extraction"}),"\n",(0,s.jsx)(t.li,{children:"Segment Anything Model (SAM) Processing"}),"\n",(0,s.jsx)(t.li,{children:"Mask Selection and Refinement"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"process-flow",children:(0,s.jsx)(t.strong,{children:"Process Flow"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"1. Video Input"}),(0,s.jsx)(t.br,{}),"\n","The pipeline begins with a video input."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"2. Frame Extraction"}),(0,s.jsx)(t.br,{}),"\n","Method: OpenCV (CV2)",(0,s.jsx)(t.br,{}),"\n","Output: Array of frames"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"3. Object Detection"}),(0,s.jsx)(t.br,{}),"\n","Model: YOLO",(0,s.jsx)(t.br,{}),"\n","Purpose: Detect ROI containing object X",(0,s.jsx)(t.br,{}),"\n","Input: Each frame from the array",(0,s.jsx)(t.br,{}),"\n","Output: ROI region"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"4. ROI Extraction"}),(0,s.jsx)(t.br,{}),"\n","The detected ROI is extracted and passed to the next stage."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"5. SAM Processing"}),(0,s.jsx)(t.br,{}),"\n","Input: ROI region",(0,s.jsx)(t.br,{}),"\n","Output: Generated image segments (all possible masks)"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"6. Mask Selection and Refinement"}),(0,s.jsx)(t.br,{}),"\n","All possible masks are generated by SAM.",(0,s.jsx)(t.br,{}),"\n","Masks are sorted from largest to smallest area.",(0,s.jsx)(t.br,{}),"\n","The largest mask area inside the ROI is identified as the target object."]}),"\n",(0,s.jsx)(t.h3,{id:"explanation",children:(0,s.jsx)(t.strong,{children:"Explanation"})}),"\n",(0,s.jsx)(t.p,{children:"In its natural state SAM segments everything on from the given image. So if feeded an image without an aim or a possible ROI it will segment most objects from that image. Little to no support is there to use SAM to detect a particular image or mask in an image. The official documentation shows that a each mask generates a an unique point for itself. This unique point is the center of the mask. When prompting we click near an image (or we can say near its mask) the closest to the point we click the changes of that mask being selected increases. This is the process os selecting an image via sam. But to select a particular object with high accuracy mare than one prompting is required which is not possible for a live video stream."}),"\n",(0,s.jsxs)(t.p,{children:["Instead we can have an object detection model that is trained to detect a particular object. This will return is a bounding box around that object. Like the image shown below.",(0,s.jsx)(t.br,{}),"\n","We can clearly see that the \u201cobject\u201d is occupying the largest space in this box. We cam feed this object into the SAM model to segment. The sam model will again sement everyhtng in he image but the mask with the largest area will be the object we require. As shown in the below figure."]}),"\n",(0,s.jsx)(t.h3,{id:"key-considerations",children:(0,s.jsx)(t.strong,{children:"Key Considerations"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"SAM Behavior"}),(0,s.jsx)(t.br,{}),"\n","SAM naturally segments all objects in a given image.",(0,s.jsx)(t.br,{}),"\n","Without specific guidance, SAM will segment most objects in the frame."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Object Selection Challenge"}),(0,s.jsx)(t.br,{}),"\n","Official SAM documentation suggests using unique points (mask centers) for prompting.",(0,s.jsx)(t.br,{}),"\n","Clicking near an image/mask increases the likelihood of selecting that mask.",(0,s.jsx)(t.br,{}),"\n","Accurate object selection often requires multiple prompts, which is impractical for live video streams."]}),"\n",(0,s.jsx)(t.p,{children:"Solution: Combination with Object Detection"}),"\n",(0,s.jsxs)(t.p,{children:["An object detection model (e.g., YOLO) is used to identify and localize the target object.",(0,s.jsx)(t.br,{}),"\n","The object detection model provides a bounding box around the target.",(0,s.jsx)(t.br,{}),"\n","This bounding box serves as the ROI for SAM processing.",(0,s.jsx)(t.br,{}),"\n","The target object typically occupies the largest area within this ROI."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Final Segmentation"}),(0,s.jsx)(t.br,{}),"\n","SAM segments everything within the ROI.",(0,s.jsx)(t.br,{}),"\n","The mask with the largest area within the ROI is selected as the final segmentation of the target object."]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-find-the-lagest-area-of-the-mask-by-sorting-the-masks",children:"How to find the lagest area of the mask by sorting the masks"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(6094).A+"",width:"1148",height:"394"})}),"\n",(0,s.jsx)(t.p,{children:"Sorted Masks"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(4900).A+"",width:"1106",height:"1032"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(8797).A+"",width:"1290",height:"1320"})}),"\n",(0,s.jsx)(t.h4,{id:"we-can-clearly-see-that-the-first-object-the-mask-with-most-area-and-is-the-required-object",children:"We can clearly see that the first object the mask with most area and is the required object."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"masks = [\n    mask['segmentation']\n    for mask\n    in sorted(sam2_result, key=lambda x: x['area'], reverse=True)\n]\n\nsv.plot_images_grid(\n    images=masks[:16],\n    grid_size=(4, 4),\n    size=(12, 12)\n)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5883:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/pipeline-c46c1636cbf4bef9e3999bd30e4ef2fb.png"},4900:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-10-795842a6c461f9ec3b027f88c8d1209c.png"},8797:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-11-9a468343a61139051cdc7c2a58b00e68.png"},6094:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/image-9-7ff5b6d8d886b37a431377ee75f4de72.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);