$(document).ready( ()=>{


    task= ()=>{

        $.ajax({
            type:"GET",
            url: "https://jsonplaceholder.typicode.com/todos",
            success:(data)=>{
                console.log(data);

                var output="<ul>"
                for(var i in data){
                    output+="<li> <div class='custom-control control-checkbox'>"

if(data[i].completed==true){

    output+=" <input type='checkbox' id='customCheck'"+data[i].id +" value='" +data[i].id+"'  checked  disabled>"
}
else{

    output+=" <input type='checkbox' id='customCheck'"+data[i].id +" value='" +data[i].id+"'    >"

}

output+="<label>"+  data[i].title +"</label>  </div>  </li> "




                }

                output+="</ul>"

                $(".result").html(output)


                var toDopromise=new Promise( (resolve,reject)=>{
                   
                    var counter=0;
                    $('input[type="checkbox"]').change(function(){       //count number of checked boxes
                        if($(this).prop("checked") == true){
                            counter+=1;
                            if(counter==5) resolve("Congrats. 5 Tasks have been Successfully Completed");
                        }
                        else {counter-=1;
                        console.log(counter)};
                        
                    })





                } );

                toDopromise.then(()=>{
                    alert("5 tasks were completed succesfully")
                })

            }
        })

    }


    task();


} )