"use client"
import { Activity, DollarCircle, Login, SmsStar } from "iconsax-react";
import { useRouter } from "next/navigation";

const Partners=()=>{
    const router=useRouter();
    return (
        <>
         <div className="relative min-h-full h-full w-full bg-[url('/header-bg.jpg')] bg-contain lg:bg-cover bg-no-repeat">
           <div className="relative z-10 grid min-h-full w-full">
             <div className="container relative pt-20 pb-16 md:pt-28 md:pb-36  h-auto overflow-hidden  px-4  text-center 2xl:px-20 mx-auto">
                 <h1 className="block antialiased tracking-normal text-4xl md:text-5xl  leading-tight text-blue-gray-900 font-extrabold">دریافت تخفیف  شگفت انگیز. 30% به ازای هر دعوت <br/><span className="font-medium md:text-4xl text-xl">همین امروز مشتری ما شوید.</span></h1>
                 <p className="block antialiased  text-sm md:text-xl leading-relaxed mt-7 md:px-32 lg:px-52 text-gray-600 font-medium">چت بات هوش مصنوعی ما به مخاطبان یا مشتریان خود پیشنهاد دهید و <span className="font-bold text-black">تخفیف  کسب کنید.</span>.</p>
                 <div className="mt-8 flex justify-center">
                 <button
                             onClick={()=>router.push("/auth/login")}
                            className="rounded-2xl bg-[#1D4ED8] p-3 text-[12px]  text-slate-50 md:py-[10px] px-[40px] md:text-base " 
                           
                        >
                            <div className=" gap-2 flex justify-center items-center">
                                <SmsStar size="25" color="#FFf" />
                                <span> دعوت دوستان</span>
                            </div>
                </button>      

                 </div>

             </div>

           </div>

         </div>
         <div className="relative min-h-full w-full">
            <div className="relative z-10 grid min-h-full w-full">
               <div className="container relative pt-20 pb-16 md:pt-28 md:pb-36  h-auto overflow-hidden  px-4  text-center 2xl:px-20 mx-auto">
                  <h3 className="block antialiased tracking-normal  text-3xl leading-snug text-blue-gray-900 font-bold"> دریافت تخفیف با همیار چت به ما بپیوندید .</h3>
                  <p className="block antialiased  text-xl leading-relaxed mt-7 md:px-32 lg:px-52 text-gray-600 font-medium">دستیار هوش مصنوعی ما قابل سفارشی‌سازی برای هر کسب و کار است <br/> فقط در 3 دقیقه!</p>
                  <div className="w-full overflow-hidden mt-20">
                    <div className="flex flex-col lg:flex-row justify-center gap-6 relative">
                       <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                        <svg  width="16" height="22" viewBox="0 0 1 24" fill="#212121" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-5.328 5.17208C-4.57789 4.4222 -3.56066 4.00093 -2.5 4.00093C-1.43934 4.00093 -0.422111 4.4222 0.328 5.17208L1.5 6.34308L2.672 5.17208C3.04099 4.79004 3.48237 4.48531 3.97038 4.27567C4.4584 4.06604 4.98328 3.95569 5.51439 3.95108C6.04551 3.94646 6.57223 4.04767 7.06382 4.24879C7.5554 4.44992 8.00201 4.74693 8.37758 5.1225C8.75315 5.49807 9.05016 5.94468 9.25129 6.43626C9.45241 6.92785 9.55362 7.45457 9.549 7.98569C9.54439 8.5168 9.43404 9.04168 9.22441 9.5297C9.01477 10.0177 8.71004 10.4591 8.328 10.8281L1.5 17.6571L-5.328 10.8281C-6.07788 10.078 -6.49915 9.06074 -6.49915 8.00008C-6.49915 6.93942 -6.07788 5.92219 -5.328 5.17208Z" fill="#212121"></path></svg>
                        </div>
                          <span >مراقبت های بهداشتی</span>
                        
                       </div>
                      <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                         <svg  width="21" height="20" viewBox="0 0 21 20" fill="#212121" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 4.80401C8.40971 4.27317 7.21265 3.99819 6 4.00001C4.745 4.00001 3.557 4.29001 2.5 4.80401V14.804C3.5903 14.2732 4.78736 13.9982 6 14C7.669 14 9.218 14.51 10.5 15.385C11.8261 14.4802 13.3947 13.9975 15 14C16.255 14 17.443 14.29 18.5 14.804V4.80401C17.4097 4.27317 16.2126 3.99819 15 4.00001C13.745 4.00001 12.557 4.29001 11.5 4.80401V12C11.5 12.2652 11.3946 12.5196 11.2071 12.7071C11.0196 12.8947 10.7652 13 10.5 13C10.2348 13 9.98043 12.8947 9.79289 12.7071C9.60536 12.5196 9.5 12.2652 9.5 12V4.80401Z" fill="#212121"></path></svg>
                        </div>
                          <span >آموزش و پرورش</span>
                        
                      </div>
                      <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                         <svg width="20" height="20" viewBox="0 0 20 20" fill="#212121" xmlns="http://www.w3.org/2000/svg"><path d="M3 1C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2C2 2.26522 2.10536 2.51957 2.29289 2.70711C2.48043 2.89464 2.73478 3 3 3H4.22L4.525 4.222C4.52803 4.23607 4.53136 4.25007 4.535 4.264L5.893 9.694L5 10.586C3.74 11.846 4.632 14 6.414 14H15C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13C16 12.7348 15.8946 12.4804 15.7071 12.2929C15.5196 12.1054 15.2652 12 15 12H6.414L7.414 11H14C14.1857 10.9999 14.3676 10.9481 14.5255 10.8504C14.6834 10.7528 14.811 10.6131 14.894 10.447L17.894 4.447C17.9702 4.29458 18.0061 4.12522 17.9985 3.95501C17.9908 3.78479 17.9398 3.61935 17.8502 3.47439C17.7606 3.32944 17.6355 3.20977 17.4867 3.12674C17.3379 3.04372 17.1704 3.00009 17 3H6.28L5.97 1.757C5.91583 1.54075 5.79095 1.34881 5.61521 1.21166C5.43946 1.0745 5.22293 1.00001 5 1H3ZM16 16.5C16 16.8978 15.842 17.2794 15.5607 17.5607C15.2794 17.842 14.8978 18 14.5 18C14.1022 18 13.7206 17.842 13.4393 17.5607C13.158 17.2794 13 16.8978 13 16.5C13 16.1022 13.158 15.7206 13.4393 15.4393C13.7206 15.158 14.1022 15 14.5 15C14.8978 15 15.2794 15.158 15.5607 15.4393C15.842 15.7206 16 16.1022 16 16.5ZM6.5 18C6.89782 18 7.27936 17.842 7.56066 17.5607C7.84196 17.2794 8 16.8978 8 16.5C8 16.1022 7.84196 15.7206 7.56066 15.4393C7.27936 15.158 6.89782 15 6.5 15C6.10218 15 5.72064 15.158 5.43934 15.4393C5.15804 15.7206 5 16.1022 5 16.5C5 16.8978 5.15804 17.2794 5.43934 17.5607C5.72064 17.842 6.10218 18 6.5 18Z" fill="#212121"></path></svg>
                        </div>
                          <span >خرده فروشی</span>
                        
                      </div>
                      <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                        <svg  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70692 0.293031C8.51939 0.105559 8.26508 0.000244141 7.99992 0.000244141C7.73475 0.000244141 7.48045 0.105559 7.29292 0.293031L0.292919 7.29303C0.110761 7.48163 0.00996641 7.73423 0.0122448 7.99643C0.0145233 8.25863 0.119692 8.50944 0.3051 8.69485C0.490508 8.88026 0.741321 8.98543 1.00352 8.9877C1.26571 8.98998 1.51832 8.88919 1.70692 8.70703L1.99992 8.41403V15C1.99992 15.2652 2.10528 15.5196 2.29281 15.7071C2.48035 15.8947 2.7347 16 2.99992 16H4.99992C5.26514 16 5.51949 15.8947 5.70703 15.7071C5.89456 15.5196 5.99992 15.2652 5.99992 15V13C5.99992 12.7348 6.10528 12.4805 6.29281 12.2929C6.48035 12.1054 6.7347 12 6.99992 12H8.99992C9.26514 12 9.51949 12.1054 9.70703 12.2929C9.89456 12.4805 9.99992 12.7348 9.99992 13V15C9.99992 15.2652 10.1053 15.5196 10.2928 15.7071C10.4803 15.8947 10.7347 16 10.9999 16H12.9999C13.2651 16 13.5195 15.8947 13.707 15.7071C13.8946 15.5196 13.9999 15.2652 13.9999 15V8.41403L14.2929 8.70703C14.4815 8.88919 14.7341 8.98998 14.9963 8.9877C15.2585 8.98543 15.5093 8.88026 15.6947 8.69485C15.8801 8.50944 15.9853 8.25863 15.9876 7.99643C15.9899 7.73423 15.8891 7.48163 15.7069 7.29303L8.70692 0.293031Z" fill="#212121"></path></svg>
                        </div>
                          <span >مهمان نوازی</span>
                        
                      </div>
                      <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                        <svg  width="21" height="20" viewBox="0 0 21 20" fill="#212121" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.996 2.13192C10.8449 2.04563 10.674 2.00024 10.5 2.00024C10.326 2.00024 10.1551 2.04563 10.004 2.13192L3.004 6.13192C2.81267 6.24138 2.66287 6.41098 2.57788 6.61436C2.49289 6.81775 2.47749 7.04351 2.53405 7.25655C2.59062 7.4696 2.716 7.65798 2.89068 7.79241C3.06537 7.92685 3.27957 7.9998 3.5 7.99992V14.9999C3.23478 14.9999 2.98043 15.1053 2.79289 15.2928C2.60536 15.4804 2.5 15.7347 2.5 15.9999C2.5 16.2651 2.60536 16.5195 2.79289 16.707C2.98043 16.8946 3.23478 16.9999 3.5 16.9999H17.5C17.7652 16.9999 18.0196 16.8946 18.2071 16.707C18.3946 16.5195 18.5 16.2651 18.5 15.9999C18.5 15.7347 18.3946 15.4804 18.2071 15.2928C18.0196 15.1053 17.7652 14.9999 17.5 14.9999V7.99992C17.7204 7.9998 17.9346 7.92685 18.1093 7.79241C18.284 7.65798 18.4094 7.4696 18.4659 7.25655C18.5225 7.04351 18.5071 6.81775 18.4221 6.61436C18.3371 6.41098 18.1873 6.24138 17.996 6.13192L10.996 2.13192ZM6.5 8.99992C6.23478 8.99992 5.98043 9.10528 5.79289 9.29282C5.60536 9.48035 5.5 9.73471 5.5 9.99992V12.9999C5.5 13.2651 5.60536 13.5195 5.79289 13.707C5.98043 13.8946 6.23478 13.9999 6.5 13.9999C6.76522 13.9999 7.01957 13.8946 7.20711 13.707C7.39464 13.5195 7.5 13.2651 7.5 12.9999V9.99992C7.5 9.73471 7.39464 9.48035 7.20711 9.29282C7.01957 9.10528 6.76522 8.99992 6.5 8.99992ZM9.5 9.99992C9.5 9.73471 9.60536 9.48035 9.79289 9.29282C9.98043 9.10528 10.2348 8.99992 10.5 8.99992C10.7652 8.99992 11.0196 9.10528 11.2071 9.29282C11.3946 9.48035 11.5 9.73471 11.5 9.99992V12.9999C11.5 13.2651 11.3946 13.5195 11.2071 13.707C11.0196 13.8946 10.7652 13.9999 10.5 13.9999C10.2348 13.9999 9.98043 13.8946 9.79289 13.707C9.60536 13.5195 9.5 13.2651 9.5 12.9999V9.99992ZM14.5 8.99992C14.2348 8.99992 13.9804 9.10528 13.7929 9.29282C13.6054 9.48035 13.5 9.73471 13.5 9.99992V12.9999C13.5 13.2651 13.6054 13.5195 13.7929 13.707C13.9804 13.8946 14.2348 13.9999 14.5 13.9999C14.7652 13.9999 15.0196 13.8946 15.2071 13.707C15.3946 13.5195 15.5 13.2651 15.5 12.9999V9.99992C15.5 9.73471 15.3946 9.48035 15.2071 9.29282C15.0196 9.10528 14.7652 8.99992 14.5 8.99992Z" fill="#212121"></path></svg>
                        </div>
                          <span >املاک</span>
                        
                      </div>
                      <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                       <svg  width="21" height="20" viewBox="0 0 21 20" fill="#212121" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 3C2.5 2.73478 2.60536 2.48043 2.79289 2.29289C2.98043 2.10536 3.23478 2 3.5 2H5.653C5.88971 2.00011 6.1187 2.08418 6.29924 2.23726C6.47979 2.39034 6.60018 2.6025 6.639 2.836L7.379 7.271C7.41436 7.48222 7.38097 7.69921 7.28376 7.89003C7.18655 8.08085 7.03065 8.23543 6.839 8.331L5.291 9.104C5.84611 10.4797 6.67283 11.7293 7.72178 12.7782C8.77072 13.8272 10.0203 14.6539 11.396 15.209L12.17 13.661C12.2655 13.4695 12.4199 13.3138 12.6106 13.2166C12.8012 13.1194 13.0179 13.0859 13.229 13.121L17.664 13.861C17.8975 13.8998 18.1097 14.0202 18.2627 14.2008C18.4158 14.3813 18.4999 14.6103 18.5 14.847V17C18.5 17.2652 18.3946 17.5196 18.2071 17.7071C18.0196 17.8946 17.7652 18 17.5 18H15.5C8.32 18 2.5 12.18 2.5 5V3Z" fill="#212121"></path></svg>
                        </div>
                          <span >مشاوره</span>
                        
                      </div>
                      <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                       <svg  width="21" height="20" viewBox="0 0 21 20" fill="#212121" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 16.5C8.5 16.8978 8.34196 17.2794 8.06066 17.5607C7.77936 17.842 7.39782 18 7 18C6.60218 18 6.22064 17.842 5.93934 17.5607C5.65804 17.2794 5.5 16.8978 5.5 16.5C5.5 16.1022 5.65804 15.7206 5.93934 15.4393C6.22064 15.158 6.60218 15 7 15C7.39782 15 7.77936 15.158 8.06066 15.4393C8.34196 15.7206 8.5 16.1022 8.5 16.5ZM15.5 16.5C15.5 16.8978 15.342 17.2794 15.0607 17.5607C14.7794 17.842 14.3978 18 14 18C13.6022 18 13.2206 17.842 12.9393 17.5607C12.658 17.2794 12.5 16.8978 12.5 16.5C12.5 16.1022 12.658 15.7206 12.9393 15.4393C13.2206 15.158 13.6022 15 14 15C14.3978 15 14.7794 15.158 15.0607 15.4393C15.342 15.7206 15.5 16.1022 15.5 16.5Z" fill="#212121"></path><path d="M3.5 4C3.23478 4 2.98043 4.10536 2.79289 4.29289C2.60536 4.48043 2.5 4.73478 2.5 5V15C2.5 15.2652 2.60536 15.5196 2.79289 15.7071C2.98043 15.8946 3.23478 16 3.5 16H4.55C4.66476 15.4349 4.97136 14.9268 5.41787 14.5618C5.86438 14.1969 6.42332 13.9975 7 13.9975C7.57668 13.9975 8.13562 14.1969 8.58213 14.5618C9.02864 14.9268 9.33524 15.4349 9.45 16H10.5C10.7652 16 11.0196 15.8946 11.2071 15.7071C11.3946 15.5196 11.5 15.2652 11.5 15V5C11.5 4.73478 11.3946 4.48043 11.2071 4.29289C11.0196 4.10536 10.7652 4 10.5 4H3.5ZM14.5 7C14.2348 7 13.9804 7.10536 13.7929 7.29289C13.6054 7.48043 13.5 7.73478 13.5 8V14.05C13.8217 13.9843 14.1533 13.9826 14.4757 14.045C14.7981 14.1074 15.105 14.2328 15.379 14.4139C15.6529 14.5949 15.8885 14.8282 16.0723 15.1004C16.256 15.3725 16.3844 15.6782 16.45 16H17.5C17.7652 16 18.0196 15.8946 18.2071 15.7071C18.3946 15.5196 18.5 15.2652 18.5 15V10C18.4999 9.73481 18.3946 9.48049 18.207 9.293L16.207 7.293C16.0195 7.10545 15.7652 7.00006 15.5 7H14.5Z" fill="#212121"></path></svg>
                        </div>
                          <span >خودرو</span>
                        
                      </div>
                      <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                          <svg  width="21" height="20" viewBox="0 0 21 20" fill="#212121" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 4C3.96957 4 3.46086 4.21071 3.08579 4.58579C2.71071 4.96086 2.5 5.46957 2.5 6V7H18.5V6C18.5 5.46957 18.2893 4.96086 17.9142 4.58579C17.5391 4.21071 17.0304 4 16.5 4H4.5Z" fill="#212121"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 9H2.5V14C2.5 14.5304 2.71071 15.0391 3.08579 15.4142C3.46086 15.7893 3.96957 16 4.5 16H16.5C17.0304 16 17.5391 15.7893 17.9142 15.4142C18.2893 15.0391 18.5 14.5304 18.5 14V9ZM4.5 13C4.5 12.7348 4.60536 12.4804 4.79289 12.2929C4.98043 12.1054 5.23478 12 5.5 12H6.5C6.76522 12 7.01957 12.1054 7.20711 12.2929C7.39464 12.4804 7.5 12.7348 7.5 13C7.5 13.2652 7.39464 13.5196 7.20711 13.7071C7.01957 13.8946 6.76522 14 6.5 14H5.5C5.23478 14 4.98043 13.8946 4.79289 13.7071C4.60536 13.5196 4.5 13.2652 4.5 13ZM9.5 12C9.23478 12 8.98043 12.1054 8.79289 12.2929C8.60536 12.4804 8.5 12.7348 8.5 13C8.5 13.2652 8.60536 13.5196 8.79289 13.7071C8.98043 13.8946 9.23478 14 9.5 14H10.5C10.7652 14 11.0196 13.8946 11.2071 13.7071C11.3946 13.5196 11.5 13.2652 11.5 13C11.5 12.7348 11.3946 12.4804 11.2071 12.2929C11.0196 12.1054 10.7652 12 10.5 12H9.5Z" fill="#212121"></path></svg>
                        </div>
                          <span >امور مالی</span>
                        
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center gap-6 mt-6">
                       <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                      <svg  width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 0C1.96957 0 1.46086 0.210714 1.08579 0.585786C0.710714 0.960859 0.5 1.46957 0.5 2V12C0.5 12.5304 0.710714 13.0391 1.08579 13.4142C1.46086 13.7893 1.96957 14 2.5 14H14.5C15.0304 14 15.5391 13.7893 15.9142 13.4142C16.2893 13.0391 16.5 12.5304 16.5 12V2C16.5 1.46957 16.2893 0.960859 15.9142 0.585786C15.5391 0.210714 15.0304 0 14.5 0H2.5ZM5.5 2H11.5V6H5.5V2ZM13.5 10V12H14.5V10H13.5ZM11.5 8H5.5V12H11.5V8ZM13.5 8H14.5V6H13.5V8ZM14.5 4V2H13.5V4H14.5ZM3.5 2V4H2.5V2H3.5ZM3.5 6H2.5V8H3.5V6ZM2.5 10H3.5V12H2.5V10Z" fill="#212121"></path></svg>
                        </div>
                          <span >سرگرمی</span>
                        
                       </div>
                       <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                        <svg  width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 3C6.5 2.73478 6.60536 2.48043 6.79289 2.29289C6.98043 2.10536 7.23478 2 7.5 2H7.51C7.77522 2 8.02957 2.10536 8.21711 2.29289C8.40464 2.48043 8.51 2.73478 8.51 3C8.51 3.26522 8.40464 3.51957 8.21711 3.70711C8.02957 3.89464 7.77522 4 7.51 4H7.5C7.23478 4 6.98043 3.89464 6.79289 3.70711C6.60536 3.51957 6.5 3.26522 6.5 3ZM8.5 6C8.5 5.73478 8.39464 5.48043 8.20711 5.29289C8.01957 5.10536 7.76522 5 7.5 5C7.23478 5 6.98043 5.10536 6.79289 5.29289C6.60536 5.48043 6.5 5.73478 6.5 6V7C5.96957 7 5.46086 7.21071 5.08579 7.58579C4.71071 7.96086 4.5 8.46957 4.5 9V10C3.96957 10 3.46086 10.2107 3.08579 10.5858C2.71071 10.9609 2.5 11.4696 2.5 12V12.683C2.875 12.7881 3.23105 12.9518 3.555 13.168C3.83487 13.3545 4.16367 13.454 4.5 13.454C4.83633 13.454 5.16513 13.3545 5.445 13.168C6.05353 12.7622 6.76858 12.5457 7.5 12.5457C8.23142 12.5457 8.94647 12.7622 9.555 13.168C9.83487 13.3545 10.1637 13.454 10.5 13.454C10.8363 13.454 11.1651 13.3545 11.445 13.168C12.0535 12.7622 12.7686 12.5457 13.5 12.5457C14.2314 12.5457 14.9465 12.7622 15.555 13.168C15.8349 13.3545 16.1637 13.454 16.5 13.454C16.8363 13.454 17.1651 13.3545 17.445 13.168C17.7689 12.9518 18.125 12.7881 18.5 12.683V12C18.5 11.4696 18.2893 10.9609 17.9142 10.5858C17.5391 10.2107 17.0304 10 16.5 10V9C16.5 8.46957 16.2893 7.96086 15.9142 7.58579C15.5391 7.21071 15.0304 7 14.5 7V6C14.5 5.73478 14.3946 5.48043 14.2071 5.29289C14.0196 5.10536 13.7652 5 13.5 5C13.2348 5 12.9804 5.10536 12.7929 5.29289C12.6054 5.48043 12.5 5.73478 12.5 6V7H11.5V6C11.5 5.73478 11.3946 5.48043 11.2071 5.29289C11.0196 5.10536 10.7652 5 10.5 5C10.2348 5 9.98043 5.10536 9.79289 5.29289C9.60536 5.48043 9.5 5.73478 9.5 6V7H8.5V6ZM18.5 14.868C17.8938 15.2569 17.1873 15.4606 16.4671 15.4542C15.7469 15.4478 15.0442 15.2316 14.445 14.832C14.1651 14.6455 13.8363 14.546 13.5 14.546C13.1637 14.546 12.8349 14.6455 12.555 14.832C11.9465 15.2378 11.2314 15.4543 10.5 15.4543C9.76858 15.4543 9.05353 15.2378 8.445 14.832C8.16513 14.6455 7.83633 14.546 7.5 14.546C7.16367 14.546 6.83487 14.6455 6.555 14.832C5.95578 15.2316 5.25307 15.4478 4.53286 15.4542C3.81266 15.4606 3.10622 15.2569 2.5 14.868V17C2.5 17.2652 2.60536 17.5196 2.79289 17.7071C2.98043 17.8946 3.23478 18 3.5 18H17.5C17.7652 18 18.0196 17.8946 18.2071 17.7071C18.3946 17.5196 18.5 17.2652 18.5 17V14.868ZM9.5 3C9.5 2.73478 9.60536 2.48043 9.79289 2.29289C9.98043 2.10536 10.2348 2 10.5 2H10.51C10.7752 2 11.0296 2.10536 11.2171 2.29289C11.4046 2.48043 11.51 2.73478 11.51 3C11.51 3.26522 11.4046 3.51957 11.2171 3.70711C11.0296 3.89464 10.7752 4 10.51 4H10.5C10.2348 4 9.98043 3.89464 9.79289 3.70711C9.60536 3.51957 9.5 3.26522 9.5 3ZM12.5 3C12.5 2.73478 12.6054 2.48043 12.7929 2.29289C12.9804 2.10536 13.2348 2 13.5 2H13.51C13.7752 2 14.0296 2.10536 14.2171 2.29289C14.4046 2.48043 14.51 2.73478 14.51 3C14.51 3.26522 14.4046 3.51957 14.2171 3.70711C14.0296 3.89464 13.7752 4 13.51 4H13.5C13.2348 4 12.9804 3.89464 12.7929 3.70711C12.6054 3.51957 12.5 3.26522 12.5 3Z" fill="#212121"></path></svg>
                        </div>
                          <span >غذا و نوشیدنی</span>
                        
                       </div>
                       <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                      <svg  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM5 7C5.26522 7 5.51957 6.89464 5.70711 6.70711C5.89464 6.51957 6 6.26522 6 6C6 5.73478 5.89464 5.48043 5.70711 5.29289C5.51957 5.10536 5.26522 5 5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6C4 6.26522 4.10536 6.51957 4.29289 6.70711C4.48043 6.89464 4.73478 7 5 7ZM12 6C12 6.26522 11.8946 6.51957 11.7071 6.70711C11.5196 6.89464 11.2652 7 11 7C10.7348 7 10.4804 6.89464 10.2929 6.70711C10.1054 6.51957 10 6.26522 10 6C10 5.73478 10.1054 5.48043 10.2929 5.29289C10.4804 5.10536 10.7348 5 11 5C11.2652 5 11.5196 5.10536 11.7071 5.29289C11.8946 5.48043 12 5.73478 12 6ZM11.536 11.535C11.6288 11.4421 11.7025 11.3318 11.7527 11.2104C11.8029 11.0891 11.8287 10.959 11.8287 10.8276C11.8287 10.6963 11.8027 10.5662 11.7524 10.4449C11.7021 10.3236 11.6284 10.2133 11.5355 10.1205C11.4426 10.0277 11.3323 9.95402 11.2109 9.9038C11.0896 9.85358 10.9595 9.82775 10.8281 9.8278C10.6968 9.82784 10.5667 9.85376 10.4454 9.90407C10.3241 9.95438 10.2138 10.0281 10.121 10.121C9.55842 10.6834 8.79549 10.9994 8 10.9994C7.20451 10.9994 6.44158 10.6834 5.879 10.121C5.69149 9.93336 5.43712 9.82789 5.17185 9.8278C4.90658 9.8277 4.65214 9.93299 4.4645 10.1205C4.27686 10.308 4.17139 10.5624 4.1713 10.8276C4.1712 11.0929 4.27649 11.3474 4.464 11.535C4.92831 11.9994 5.47956 12.3678 6.08628 12.6192C6.69299 12.8706 7.34328 12.9999 8 12.9999C8.65672 12.9999 9.30701 12.8706 9.91372 12.6192C10.5204 12.3678 11.0717 11.9994 11.536 11.535Z" fill="#212121"></path></svg>
                        </div>
                          <span >تناسب اندام و تندرستی</span>
                        
                       </div>
                       <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                      <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99999 2C7.79099 2 5.99999 3.791 5.99999 6V7H4.99999C4.48999 7 4.062 7.38301 4.006 7.89001L3.006 16.89C2.975 17.172 3.06499 17.455 3.25499 17.667C3.44499 17.879 3.71599 18 3.99999 18H16C16.284 18 16.555 17.879 16.745 17.667C16.935 17.455 17.025 17.172 16.994 16.89L15.994 7.89001C15.938 7.38301 15.51 7 15 7H14V6C14 3.791 12.209 2 9.99999 2ZM12 7V6C12 4.895 11.105 4 9.99999 4C8.89499 4 7.99999 4.895 7.99999 6V7H12ZM5.99999 10C5.99999 9.448 6.44799 9 6.99999 9C7.55199 9 7.99999 9.448 7.99999 10C7.99999 10.552 7.55199 11 6.99999 11C6.44799 11 5.99999 10.552 5.99999 10ZM13 9C12.448 9 12 9.448 12 10C12 10.552 12.448 11 13 11C13.552 11 14 10.552 14 10C14 9.448 13.552 9 13 9Z" fill="#212121"></path></svg>
                        </div>
                          <span >فروشگاه آنلاین</span>
                        
                       </div>
                       <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                      <svg  width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3939 2.55291C11.3108 2.38703 11.1832 2.24755 11.0253 2.15007C10.8674 2.0526 10.6855 2.00098 10.4999 2.00098C10.3144 2.00098 10.1325 2.0526 9.97462 2.15007C9.81674 2.24755 9.68909 2.38703 9.60595 2.55291L2.60595 16.5529C2.51909 16.7265 2.48463 16.9216 2.50677 17.1144C2.52891 17.3073 2.6067 17.4895 2.73064 17.6389C2.85458 17.7883 3.01931 17.8984 3.20475 17.9557C3.39019 18.0131 3.58831 18.0152 3.77495 17.9619L8.77495 16.5329C8.98392 16.4731 9.16773 16.3469 9.29855 16.1733C9.42937 15.9997 9.50007 15.7883 9.49995 15.5709V10.9999C9.49995 10.7347 9.6053 10.4803 9.79284 10.2928C9.98038 10.1053 10.2347 9.99991 10.4999 9.99991C10.7652 9.99991 11.0195 10.1053 11.2071 10.2928C11.3946 10.4803 11.4999 10.7347 11.4999 10.9999V15.5709C11.4998 15.7883 11.5705 15.9997 11.7013 16.1733C11.8322 16.3469 12.016 16.4731 12.2249 16.5329L17.2249 17.9609C17.4115 18.0143 17.6096 18.0123 17.7951 17.9551C17.9805 17.8979 18.1453 17.7879 18.2693 17.6387C18.3934 17.4894 18.4713 17.3073 18.4936 17.1145C18.5159 16.9217 18.4816 16.7266 18.3949 16.5529L11.3949 2.55291H11.3939Z" fill="#212121"></path></svg>
                        </div>
                          <span >حمل و نقل</span>
                        
                       </div>
                       <div className="relative  items-center flex font-bold whitespace-nowrap select-none border py-2 rounded-full capitalize text-lg text-gray-900 border-gray-300 px-6" data-projection-id="11">
                      <div className="w-6 h-6 mx-2 mt-0.5">
                        <svg  width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2C10.7652 2 11.0195 2.10536 11.2071 2.29289C11.3946 2.48043 11.5 2.73478 11.5 3V4.323L15.454 5.905L17.053 5.105C17.2903 4.98645 17.5651 4.96705 17.8167 5.05106C18.0684 5.13508 18.2764 5.31563 18.395 5.553C18.5135 5.79037 18.5329 6.06511 18.4489 6.31678C18.3649 6.56846 18.1843 6.77645 17.947 6.895L16.714 7.511L18.452 12.931C18.5109 13.1149 18.5153 13.3118 18.4647 13.4982C18.4142 13.6845 18.3107 13.8522 18.167 13.981C17.4341 14.6381 16.4842 15.001 15.5 15C14.5157 15.001 13.5658 14.6381 12.833 13.981C12.6892 13.8522 12.5857 13.6845 12.5352 13.4982C12.4846 13.3118 12.489 13.1149 12.548 12.931L14.263 7.582L11.5 6.477V16H13.5C13.7652 16 14.0195 16.1054 14.2071 16.2929C14.3946 16.4804 14.5 16.7348 14.5 17C14.5 17.2652 14.3946 17.5196 14.2071 17.7071C14.0195 17.8946 13.7652 18 13.5 18H7.49996C7.23474 18 6.98039 17.8946 6.79285 17.7071C6.60531 17.5196 6.49996 17.2652 6.49996 17C6.49996 16.7348 6.60531 16.4804 6.79285 16.2929C6.98039 16.1054 7.23474 16 7.49996 16H9.49996V6.477L6.73696 7.582L8.45196 12.931C8.51088 13.1149 8.51532 13.3118 8.46475 13.4982C8.41418 13.6845 8.31075 13.8522 8.16696 13.981C7.43412 14.6381 6.48423 15.001 5.49996 15C4.51568 15.001 3.56579 14.6381 2.83296 13.981C2.68916 13.8522 2.58574 13.6845 2.53516 13.4982C2.48459 13.3118 2.48903 13.1149 2.54796 12.931L4.28596 7.511L3.05296 6.894C2.82423 6.77066 2.6525 6.56312 2.57414 6.31535C2.49578 6.06758 2.51695 5.79904 2.63317 5.56661C2.74938 5.33418 2.95152 5.15611 3.19675 5.07014C3.44198 4.98416 3.71104 4.99702 3.94696 5.106L5.54596 5.905L9.49996 4.323V3C9.49996 2.73478 9.60531 2.48043 9.79285 2.29289C9.98039 2.10536 10.2347 2 10.5 2ZM5.49996 10.274L4.68196 12.826C4.93196 12.938 5.20796 13 5.49996 13C5.79196 13 6.06896 12.938 6.31796 12.826L5.49996 10.274ZM15.5 10.274L14.682 12.826C14.932 12.938 15.208 13 15.5 13C15.792 13 16.069 12.938 16.318 12.826L15.5 10.274Z" fill="#212121"></path></svg>
                        </div>
                          <span >حقوقی</span>
                        
                       </div>
                     

                    </div>

                  </div>
               </div>
            </div>

         </div>
         <div className="relative min-h-full w-full">
           <div className="relative z-10 grid min-h-full w-full">
              <div className="container relative pt-20 pb-16 md:pt-28 md:pb-36 h-auto overflow-hidden  px-4  text-center 2xl:px-20 mx-auto">
              <h3 className="block antialiased tracking-normal  text-3xl leading-snug text-blue-gray-900 font-bold">در 3 مرحله آسان شروع کنید .</h3>
              <div className="lg:w-[60rem] grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 mt-20  mx-auto ">
                    <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 bg-zinc-100">
                        <div className="absolute left-4 top-3">
                        <Login
                           size="32"
                           color="#1d4ed8"
                         />
                        </div>
                       <div className="p-6">
                           <h5 className="block antialiased tracking-normal text-xl font-semibold leading-snug text-blue-gray-900">مرحله 1</h5>
                           <p className="text-right mb-1 mt-2 font-semibold  text-zinc-900">ساختن اکانت کاربری</p>
                           <p className="text-sm  text-zinc-500 text-right">
                           برای دسترسی به لینک های دعوت منحصر به فرد خود و  درآمد خود، در برنامه  ما ثبت نام کنید.
                           </p>
                       </div>


                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 bg-zinc-100">
                    <div className="absolute left-4 top-3">
                        <Activity
                           size="32"
                           color="#1d4ed8"
                         />
                        </div>
                       <div className="p-6">
                           <h5 className="block antialiased tracking-normal text-xl font-semibold leading-snug text-blue-gray-900">مرحله 2</h5>
                           <p className="text-right mb-1 mt-2 font-semibold  text-zinc-900">معرفی همیار چت</p>
                           <p className="text-sm  text-zinc-500 text-right">
                           لینک های معرفی  منحصر به  همیار چت  را در پست های وبلاگ، رسانه های اجتماعی یا سایر محتوای تبلیغاتی خود اضافه کنید. به این ترتیب هر ترافیکی که ارسال می کنید ثبت و بررسی می شود.
                           </p>
                       </div>


                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl text-gray-700 bg-zinc-100">
                    <div className="absolute left-4 top-3">
                        <DollarCircle
                           size="32"
                           color="#1d4ed8"
                         />
                        </div>
                       <div className="p-6">
                           <h5 className="block antialiased tracking-normal text-xl font-semibold leading-snug text-blue-gray-900">مرحله 3</h5>
                           <p className="text-right mb-1 mt-2 font-semibold  text-zinc-900">دریافت تخفیف</p>
                           <p className="text-sm  text-zinc-500 text-right">
                           هنگامی که ثبت نام  از طریق لینک معرفی همیارچت انجام می شود، تا زمانی که اشتراک ادامه دارد، هر ماه 30 درصد از هزینه های اشتراک کاهش می یابد. می توانید تمام تخفیف های خود را در داشبورد بررسی کنید.
                           </p>
                       </div>


                    </div>

               </div>   
              </div>
           </div>
            
         </div>
        </>
    )

};
export default Partners;