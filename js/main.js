    //document.write("ok");
    //console.log("HI");
    //console.error("HI");
    //console.warn("HI");

    // var s=15;
    // switch(s){
    //     case 15: 
    //       s=3;
    //     break;
    //     default:
    //         s=15
    // }


    //alert("HI");
    //var b=confirm("???");
    //var b=prompt("??????");


    // function f(a) {

    //     return a;
    // }

    function cf(el) {
        //var name=document.getElementById('nm').value;
        var name2=el.name.value;
        var pass2=el.pass.value;
        var em=el.email.value;

        if(name2.length<3){
            alert("name is too small");
            //console.info(name2.length);
            //alert(name2);
        }

        if(em==""){
            alert("write email");
        }

        if(pass2==""){
            alert("write password");
        }

        //console.info(name2);
        // console.info(pass2);
        // return false;
    }


    function abcde(el) {
        var b=el.value;
        //el.style.background="red";
        //el.style.cssText="border-radius=50%;";
        console.info(b);
    }

    var text= document.getElementById('t');

    var a = document.getElementsByTagName('span');
    for(var i=0;i<a.length;i++){
        console.info(a[i].innerHTML);
    }

    
    var a2 =[
        [1,2,3,4,5],
        [6,7,8,9,10],
        [4,8,2,9,5]
    ];
    var n=a.length;
    

    