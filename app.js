let userobject = [];
let userobjec = JSON.parse(localStorage.getItem("userobj"));

if (userobjec.length !== 0){
    userobject = userobjec;
}
function forSignIn() {
  let name = document.getElementById("fnameup").value;
  let email = document.getElementById("emailup").value;
  let password = document.getElementById("passup").value;
  let userobj = {
    name,
    email,
    password,
  };
  console.log(userobj, "ye");
  userobject.push(userobj);
  if (name.length !== 0 && email.length !== 0 && password.length !== 0) {
    location.assign("./login");
  } else {
    alert("Please fillout all fields");
  }

  localStorage.setItem("userobj", JSON.stringify(userobject));
}
// console.log(userobject, "or");
let nae;
var tems = JSON.parse(localStorage.getItem("teams"));
// let teamsname = tems.ownername;
console.log(tems);
let userName;
const user = () => {
  let username = document.getElementById("emailin").value;
  let password = document.getElementById("passwordin").value;

  console.log("user", username);
  let users = localStorage.getItem("userobj");
  let usersarr = JSON.parse(users);

  if (username.length === 0 || password.length === 0) {
    return alert("Please fillout all fields");
  }
  for (let i = 0; i < usersarr.length; i++) {
    if (username === usersarr[i].email) {
      if (password === usersarr[i].password) {
          localStorage.setItem("name2", JSON.stringify(usersarr[i].name));
          userName = usersarr[i].name;
          console.log(userName, "hello");
          let uRl = location.assign("../teams");
        return uRl, userName;
      } else {
        return alert("wrong Email or password");
      }
    }
  }

  alert("wrong Email or password");
  console.log(userName, "phe");
  var abcd = (document.getElementById("names").innerHTML = userName);
  nae = abcd;
  console.log(nae);
};

let members = [];
var qNaarr = [];
// console.log(members, qNaarr)
const verifyadd = () => {
  // console.log(userName, "abckdlfksakdm")
  let email = document.getElementById("membersemail").value;
  var bcd = document.getElementById("memname").value;
  // let abc = document.getElementById("emailmodal").innerHTML = email;
  // console.log("abc", abc);
  // if (bcd.length !== 0 && abc.length == 0) {
  //   return alert("please fillout all fields");
  // }

  members.push({ email: email, name: bcd });
  localStorage.setItem("members", JSON.stringify(members));
  document.getElementById("membersemail").value = null;
  document.getElementById("memname").value = null;
  // console.log(members.length);
};

let teams = [];

// let teamlocal = JSON.parse(localStorage.getItem("teams"));

let teamobjects = JSON.parse(localStorage.getItem("teams"));
console.log(teamobjects)
// if (teamobjects.length != null){
//     teams = teamobjects;
// }else{
//   alert('hello')
// }
const teamCreate = () => {
  let teamname = document.getElementById("teamname").value;
  let teamcategory = document.getElementById("teamcategory").value;
  let membersemail = members;
  let ownername = JSON.parse(localStorage.getItem("name2"));
  console.log(ownername);
  // document.getElementById('user').innerHTML
  console.log(ownername);
  let teamobj = {
    teamname,
    teamcategory,
    members,
    ownername,
  };

  teams.push(teamobj);
  console.log(membersemail, "yahan");
  console.log(teams);

  localStorage.setItem("teams", JSON.stringify(teams));
};
// console.log(teams, 'te');

console.log("teams", teams);


let ansobj = [];
let ansob = JSON.parse(localStorage.getItem("Answerobject")) || [];

//if (ansob.length !== 0) {
 // ansobj = ansob;
//}

const anssubmit = () => {
  let date = dATe;
  let que1 = document.getElementById("ansq1").innerHTML;
  let aa = document.getElementById("ans1").value;
  let que2 = document.getElementById("ansq2").innerHTML;
  let bb = document.getElementById("ans2").value;
  let que3 = document.getElementById("ansq3").innerHTML;
  let cc = document.getElementById("ans3").value;
  // let mems = JSON.parse(localStorage.getItem('members'));
  // console.log(mems)
  // console.log(que1, que2, que3)
  console.log(nae);
  qNaarr.push(ansobj);
  var qna = [];
  let ansobj1 = {
    que: que1,
    ans: aa,
  };
  let ansobj2 = {
    que: que2,
    ans: bb,
  };
  let ansobj3 = {
    que: que3,
    ans: cc,
  };
  let usernamedate = {
    date: date,
    qna: qna,
  };

  localStorage.setItem("Answerobject", JSON.stringify(ansobj));
  // console.log(ansobj)
  // console.log('user', usernamedate)

  var obj = [];
  for (i = 0; i < 4; i++) {
    if ((i = 1)) {
      obj.push({
        ques: que1,
        ans: aa,
      });
      break;
    } else if ((i = 2)) {
      obj.push({ ques: que2, ans: bb });
      break;
    } else if ((i = 3)) {
      obj.push({
        ques: que3,
        ans: cc,
      });
      break;
    } else {
      obj = null;
    }
    qna.push(obj);
  }
  // console.log(obj)

  // console.log(qna, 'yaah')

  // console.log(usernamedate);
  qna.push(ansobj1, ansobj2, ansobj3);
  ansobj.push(usernamedate);
  // console.log(ansobj)
};

let memberData = [];

let memberDetail = {
  name: "memeber1",
  email: "memeber@abc.com",
  dates: ansobj,
};

memberData.push(memberDetail);
// function addData(){
// }

// console.log(memberData, 'data')

localStorage.setItem("memberArray", JSON.stringify(memberData));


// console.log(members);
// const addMember = () => {
//   console.log('yahan')
// }

// console.log(members);

// let teamsD;

// teams.map((v) => {
//   let membersArray = v.members;

//   // console.log(membersArray, "y");

//   membersArray.map((value) => {
//     let teamowner = JSON.parse(localStorage.getItem("name2"));

//     if (value.name === teamowner) {
//       teamsD = value.name;
//     }
//   });
// });
let teamowner = JSON.parse(localStorage.getItem("name2"));


let teamDat = localStorage.getItem("teams");

    let teamslis = JSON.parse(teamDat);

    console.log(teamslis);

    let teamSho;

    let teamdi = teamslis.map ((v) => {
      teamSho = `<a href="../member"> <div class="row">
            <div class="col-md-10 col-12 offset-md-1 team-own">
              <div class="row">
                <h5 class="col-12">${v.teamcategory} </h5>
              </div>
              <div class="row">
              <div class="col-12" style = "line-break: anywhere;">
              ${v.members.map((value) => { 
                return value.name
                }) }
                </div>
              </div>
            </div>
          </div></a>` ;
          return teamSho;
    })
    console.log(teamdi)
    document.getElementById("allteams").innerHTML = teamdi;

const subset = () => {
  let ques1 = document.getElementById("question1").value;
  let ques2 = document.getElementById("question2").value;
  let ques3 = document.getElementById("question3").value;

  let quesobj = {
    ques1,
    ques2,
    ques3,
  };

  localStorage.setItem("QuestionObject", JSON.stringify(quesobj));

  console.log(ques1, ques2, ques3);
};
