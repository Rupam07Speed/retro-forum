
const allPost = async () => {
    loader(false);
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    const postDetails = data.posts
    // console.log(postDetails);
    const allpostContainer = document.getElementById("letDiscussContainer");
   
    postDetails.forEach(post => {
        loader(true);
        console.log(post); 
        let activeOrNot = '';
        if(post.isActive)
        {
          activeOrNot = `<span id="isActive" class="indicator-item badge badge-secondary border-none bg-green-400"></span>`
        }
        else{
          activeOrNot = `<span id="isActive" class="indicator-item badge badge-secondary border-none bg-red-400"></span>`
        }
        const card = document.createElement("div");
        card.innerHTML = `<div
        class="bg-[#F3F3F5]   lg:w-[95%]  mx-auto sm:card   flex justify-between lg:justify-center  items-center rounded-2xl border-[#1313181A] border-2 p-1 lg:p-6 my-6"
      >
        <div class="w-[15%]   mx-auto  mt-5">
          <div class="">
            <div class="avatar indicator">
            ${activeOrNot}
              <div class="relative bottom-1 w-24 rounded-2xl ">
                <img
                  src=${post.image}
                />
              </div>
            </div>
          </div>
        </div>
        <div class=" w-[80%] lg:w-[70%] mx-auto ">
          <div class=" w-full card-body items-center">
            <div class=" w-full">
              <div class=" sm:w-full text-left space-y-2 mb-5">
                <div
                  class=" w-[100%] flex flex-col md:flex-row lg:flex-row text-sm font-medium lg:space-x-5"
                >
                  <h4>#${post.category}</h4>
                  <h4>Author : ${post.author.name}</h4>
                </div>
                <h3 class="text-xl font-extrabold">${post.title}</h3>
                <p class="text-[#13131899] font-normal text-base">
                  ${post.description}
                </p>
              </div>
              <hr />
              <div class=" flex flex-col lg:flex-row justify-between">
                <div
                  class="  w-[100%] lg:w-[80%] flex text-left gap-5 text-[#13131880] mt-3"
                >
                  <p>
                    <i class="fa-regular fa-comment-dots"></i>
                    <span class="ml-2">${post.comment_count}</span>
                  </p>
                  <p>
                    <i class="fa-regular fa-eye"></i>
                    <span class="ml-2">${post.view_count}</span>
                  </p>
                  <p>
                    <i class="fa-regular fa-clock"></i>
                    <span class="ml-2"> ${post.posted_time}</span> min
                  </p>
                </div>
                <div class="flex justify-end">
                  <button onclick="markAsRead('${post.title}','${post.view_count}')"
                    class="btn bg-[#10B981] text-white border-8 w-2 rounded-full"
                  >
                    <i class="fa-regular fa-envelope-open"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
        allpostContainer.appendChild(card);
    });
 }
// inpdut and search specific cat
const searchCatPost = async(catid) => {
  loader(false);
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${catid}`);
  const data = await res.json();
  const postDetails = data.posts
  console.log(postDetails);
  const allpostContainer = document.getElementById("letDiscussContainer");
  allpostContainer.textContent=" ";
    postDetails.forEach(post => {
      loader(true);
        console.log(post); 
        const card = document.createElement("div");
        let activeOrNot = '';
        if(post.isActive)
        {
          activeOrNot = `<span id="isActive" class="indicator-item badge badge-secondary border-none bg-green-400"></span>`
        }
        else{
          activeOrNot = `<span id="isActive" class="indicator-item badge badge-secondary border-none bg-red-400"></span>`
        }
        card.innerHTML = `<div
        class="bg-[#F3F3F5]   lg:w-[95%]  mx-auto sm:card   flex justify-between lg:justify-center  items-center rounded-2xl border-[#1313181A] border-2 p-1 lg:p-6 my-6"
      >
        <div class="w-[15%]   mx-auto  mt-5">
          <div class="">
            <div class="avatar indicator">
            ${activeOrNot}
              <div class="relative bottom-1 w-24 rounded-2xl ">
                <img
                  src=${post.image}
                />
              </div>
            </div>
          </div>
        </div>
        <div class=" w-[80%] lg:w-[70%] mx-auto ">
          <div class=" w-full card-body items-center">
            <div class=" w-full">
              <div class=" sm:w-full text-left space-y-2 mb-5">
                <div
                  class=" w-[100%] flex flex-col md:flex-row lg:flex-row text-sm font-medium lg:space-x-5"
                >
                  <h4>#${post.category}</h4>
                  <h4>Author : ${post.author.name}</h4>
                </div>
                <h3 class="text-xl font-extrabold">${post.title}</h3>
                <p class="text-[#13131899] font-normal text-base">
                  ${post.description}
                </p>
              </div>
              <hr />
              <div class=" flex flex-col lg:flex-row justify-between">
                <div
                  class="  w-[100%] lg:w-[80%] flex text-left gap-5 text-[#13131880] mt-3"
                >
                  <p>
                    <i class="fa-regular fa-comment-dots"></i>
                    <span class="ml-2">${post.comment_count}</span>
                  </p>
                  <p>
                    <i class="fa-regular fa-eye"></i>
                    <span class="ml-2">${post.view_count}</span>
                  </p>
                  <p>
                    <i class="fa-regular fa-clock"></i>
                    <span class="ml-2"> ${post.posted_time}</span> min
                  </p>
                </div>
                <div class="flex justify-end">
                  <button onclick="markAsRead('${post.title}','${post.view_count}')"
                    class="btn bg-[#10B981] text-white border-8 w-2 rounded-full"
                  >
                    <i class="fa-regular fa-envelope-open"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
        allpostContainer.appendChild(card);
    });
}
// set green and red
const makeGreenOrRed = (isActive) =>{
  const active = document.getElementById("isActive");
  const isActiveOrNot = isActive;
  console.log(isActiveOrNot)
  
  if(!isActiveOrNot)
  {
    active.classList.add = 'bg-red-400';
  }
  else{
    active.classList.add = "bg-green-400";
  }
}
// mark as read for counting total reading and add the div 
 let counter = 0;
const markAsRead = (title, view) =>{
    counter++;
    const mark = document.getElementById("mark");
    mark.innerText = counter;
    const allMsgContainer = document.getElementById("container");
    const msg= document.createElement("div");
    
    console.log(title, view);
    msg.innerHTML=`<div class=" rounded-xl bg-white h-[60px] my-3 flex justify-between">
    <div class="w-[100%] bg-white rounded-xl flex justify-between p-3"> 
    <div class="">
                    <h2 class="text-xl font-bold">${title}</h2>
                  </div>
                  <div>
                    <h2>
                      <i class="fa-regular fa-eye"></i>
                      <span class="ml-2 text-base font-medium"
                        >${view}</span
                      >
                    </h2>
                  </div>
    </div>
                  </div>
                `
                allMsgContainer.appendChild(msg);
}
// search catagory function for the input button
const searchCat = () =>{
  const search = document.getElementById("search-cat");
  const value = search.value;
  console.log(value);
  searchCatPost(value);
}
// latest blog fetch function
const latestBlogs = async() => {
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
  const datas = await res.json();
  const container = document.getElementById("latest-container");
  datas.forEach(data =>{
    console.log(data);
    const divCard = document.createElement('div');
    divCard.innerHTML=`
    <div class="card  bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img
                src=${data.cover_image}
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-left text-left">
              <h2 class="card-title text-[#12132D99] font-medium text-sm">
                <i class="fa-solid fa-calendar-days"></i>${data.author.posted_date?data.author.posted_date:"No publish date"}
              </h2>
              <h2 class="w-full card-title text-black font-extrabold text-base ">
                ${data.title}
              </h2>
              <p class="text-base font-normal text-gray-400">
                ${data.description.slice(0,40)}</p>
              <div class="flex gap-4 ">
                <div>
                  <div class="avatar">
                    <div class="w-12 rounded-full">
                      <img
                        src=${data.profile_image}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 class="font-bold text-base">${data.author.name}</h2>
                  <p class="font-normal text-sm">${data.author.designation?data.author.designation:"Unknown"}</p>
                </div>
              </div>
            </div>
          </div>
    `
    container.appendChild(divCard);
  })
}
// loading function

const loader = (isFetched) => {
  const hiddenLoad = document.getElementById("loader");
  const hide = document.getElementById('allpost-container');
  setTimeout(2);
  if(!isFetched){
    console.log("loadin")
    hiddenLoad.classList.remove("hidden");
    hide.classList.add("hidden");
  }
  else{
    console.log("hide")
    setTimeout(() => {
      hiddenLoad.classList.add("hidden");
      hide.classList.remove("hidden");
  }, 2000)
  }
  
}
allPost();
latestBlogs();