let postTxt = document.getElementById("post");
let contentBox = document.getElementById("contentBox");
let postBtn = document.getElementById("postBtn");
let arr = [];
let content = "";

//show previous stored data
let actualArr = [];
actualArr = localStorage.getItem("content");
actualArr = JSON.parse(actualArr);
if (actualArr != null) {
  showContent();
}

//post data and show new data
postBtn.addEventListener("click", () => {
  if (postTxt.value != "") {
    arr.push(postTxt.value);

    // Working for local storage
    content = localStorage.getItem("content");
    content = JSON.parse(content);

    if (content == null) {
      localStorage.setItem("content", JSON.stringify(arr));
    } else {
      content.push(postTxt.value);
      localStorage.setItem("content", JSON.stringify(content));
    }
    postTxt.value = "";
  }
  actualArr = localStorage.getItem("content");
  actualArr = JSON.parse(actualArr);
  contentBox.innerHTML = "";
  showContent();
});

//show data function
function showContent() {
  let html = "";
  html = actualArr.forEach((element, index) => {
    contentBox.innerHTML += `

    <div id="maincontent">
                    <div class="contents">
                        <div id="postTop">
                            <div class="rightside">
                                <div class="profilePhoto">
                                    <img src="./pictures/profilePicture.jpg" alt="">
                                </div>
                                <div id="profilename">
                                    Gaurab sunar
                                </div>
                                <p> add a new post.</p>
                            </div>
                            <div id="hamburgerSmall" class="hamclass">
                                <div class="btn"></div>
                                <div class="btn"></div>
                                <div class="btn"></div>
                            </div>

                            <div class="hamElements">
                                <div class="contentBtn">
                                    <button class="Delete ${index}">Delete</button>
                                    <button class="Hide">Hide</button>
                                </div>
                            </div>
                            

                        </div>
                        <div id="mainpost">
                            <p>
                            ${element}
                            </p>
                        </div>
                        <div id="ContentAcivities">
                            <div class="like flex">
                                <i class="fa-solid fa-heart"></i>
                                <p>Like</p>
                            </div>
                            <div class="comment flex">
                                <i class="fa-solid fa-comment"></i>
                                <p>Comment</p>
                            </div>
                            <div class="share flex">
                                <i class="fa-solid fa-share"></i>
                                <p>share</p>
                            </div>
                        </div>
                    </div>
                </div>    
    `;
    ham();
  });
}



function ham(){
  let clas = document.querySelectorAll( ".hamclass");
  console.log(clas)
}