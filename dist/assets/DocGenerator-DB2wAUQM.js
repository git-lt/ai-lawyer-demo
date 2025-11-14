import{d as w,j as a,c as v,a as k,b,e,l as o,y as r,t as g,p as d,f as x,o as V}from"./index-CbOchtVq.js";import{_}from"./AppHeader.vue_vue_type_script_setup_true_lang-DZHUL4OD.js";import{_ as C}from"./FooterTabs.vue_vue_type_script_setup_true_lang-CeHY9bKm.js";const U={class:"container pb-20"},D={class:"bg-white rounded-xl border shadow-sm p-4"},$={class:"mb-4"},h={class:"grid grid-cols-1 sm:grid-cols-2 gap-3"},B={class:"flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"},N={class:"flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"},j={class:"flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"},E={class:"flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"},I={class:"border rounded-lg p-4 bg-gray-50 mb-4"},M={class:"flex justify-between items-center mb-3"},T={class:"text-sm text-gray-500"},A={class:"bg-white p-4 rounded border text-sm max-h-64 overflow-y-auto"},G={class:"whitespace-pre-wrap"},L={class:"mb-4"},R={class:"flex items-center mb-2"},S={class:"flex items-center mb-2"},W={class:"flex items-center"},J=w({__name:"DocGenerator",setup(q){const l=a("complaint"),u=a(!0),m=a(!0),p=a(!0),n=v(()=>{switch(l.value){case"complaint":return{title:"12315投诉书",type:"投诉书"};case"payment-order":return{title:"支付令申请书",type:"支付令"};case"group-complaint":return{title:"集体投诉书",type:"集体投诉"};case"court-suit":return{title:"民事起诉书",type:"起诉书"};default:return{title:"文书",type:"文书"}}}),c=v(()=>`${n.value.title}

投诉人：张三
联系方式：13800138000
被投诉人：北京某某健身有限公司
地址：北京市朝阳区xxx街道xxx号

投诉请求：
1. 退还剩余会员费用人民币2,400元
2. 赔偿因此造成的相关损失

事实与理由：
本人于2024年1月15日与被投诉人签订健身会员合同，
支付年费3,600元。后被投诉人突然关门停业，
导致合同无法继续履行...

此致
12315消费者投诉平台

投诉人：张三
日期：2024年1月20日`),f=()=>{console.log("生成文书:",l.value),alert("文书生成成功！已保存到本地。")},y=()=>{console.log("预览文书");const i=window.open("","_blank");i&&i.document.write(`
      <html>
        <head>
          <title>${n.value.title}预览</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; line-height: 1.6; }
            .header { text-align: center; margin-bottom: 30px; }
            .section { margin-bottom: 20px; }
            .signature { margin-top: 40px; text-align: right; }
          </style>
        </head>
        <body>
          <div class="header">
            <h2>${n.value.title}</h2>
          </div>
          <div class="section">
            <pre>${c.value}</pre>
          </div>
          <div class="signature">
            <p>投诉人：张三</p>
            <p>日期：2024年1月20日</p>
          </div>
        </body>
      </html>
    `)};return(i,t)=>(V(),k("div",null,[b(_,{title:"文书生成","show-back":!0,"back-to":"/"}),e("div",U,[e("div",D,[t[18]||(t[18]=e("div",{class:"font-semibold mb-4"},"文书生成",-1)),t[19]||(t[19]=e("div",{class:"text-gray-600 mb-4"}," 根据您的证据和信息，生成专业的法律文书 ",-1)),e("div",$,[t[11]||(t[11]=e("label",{class:"block text-sm font-medium mb-2"},"选择文书类型",-1)),e("div",h,[e("label",B,[o(e("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=s=>l.value=s),value:"complaint",class:"mr-3"},null,512),[[r,l.value]]),t[7]||(t[7]=e("div",null,[e("div",{class:"font-medium"},"投诉书"),e("div",{class:"text-sm text-gray-500"},"向12315投诉使用")],-1))]),e("label",N,[o(e("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=s=>l.value=s),value:"payment-order",class:"mr-3"},null,512),[[r,l.value]]),t[8]||(t[8]=e("div",null,[e("div",{class:"font-medium"},"支付令申请"),e("div",{class:"text-sm text-gray-500"},"向法院申请支付令")],-1))]),e("label",j,[o(e("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=s=>l.value=s),value:"group-complaint",class:"mr-3"},null,512),[[r,l.value]]),t[9]||(t[9]=e("div",null,[e("div",{class:"font-medium"},"集体投诉书"),e("div",{class:"text-sm text-gray-500"},"多人联合投诉使用")],-1))]),e("label",E,[o(e("input",{type:"radio","onUpdate:modelValue":t[3]||(t[3]=s=>l.value=s),value:"court-suit",class:"mr-3"},null,512),[[r,l.value]]),t[10]||(t[10]=e("div",null,[e("div",{class:"font-medium"},"法院起诉书"),e("div",{class:"text-sm text-gray-500"},"正式法院起诉使用")],-1))])])]),e("div",I,[e("div",M,[t[12]||(t[12]=e("div",{class:"font-medium"},"文书预览",-1)),e("div",T,g(n.value.title),1)]),e("div",A,[e("div",G,g(c.value),1)])]),e("div",L,[e("label",R,[o(e("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=s=>u.value=s),class:"mr-2"},null,512),[[d,u.value]]),t[13]||(t[13]=e("span",{class:"text-sm"},"附带证据清单",-1))]),e("label",S,[o(e("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=s=>m.value=s),class:"mr-2"},null,512),[[d,m.value]]),t[14]||(t[14]=e("span",{class:"text-sm"},"附带法律依据",-1))]),e("label",W,[o(e("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=s=>p.value=s),class:"mr-2"},null,512),[[d,p.value]]),t[15]||(t[15]=e("span",{class:"text-sm"},"附带联系方式",-1))])]),e("div",{class:"grid grid-cols-2 gap-2"},[e("button",{class:"t-btn-primary",onClick:f},[...t[16]||(t[16]=[e("i",{class:"fa-solid fa-file-pdf mr-2"},null,-1),x("生成文书 ",-1)])]),e("button",{class:"t-btn-secondary",onClick:y},[...t[17]||(t[17]=[e("i",{class:"fa-solid fa-eye mr-2"},null,-1),x("完整预览 ",-1)])])])])]),b(C)]))}});export{J as default};
