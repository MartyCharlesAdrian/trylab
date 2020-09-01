function displayEvent(){
    
    alert("Your event has been saved.");

    var Type = ("The Event Type is "+ document.getElementById("Type").value);
    var Name = ("The Event Name is "+ document.getElementById("Name").value);
    var Start = ("The Event Date is from "+ document.getElementById("Start").value);
    var End = (" to "+ document.getElementById("End").value);
    var Post = ("The Posting Date is "+ document.getElementById("Post").value);
    alert("Event Details: \n\n" + Type + "\n" + Name +"\n" + Start + End + "\n" + Post );

    var Reg, Fam, AGE, POC, Host;

    if(document.getElementById("Reg").checked){
        Reg=("Registration is required.");
    } else {
        Reg=("Registration is not required.");
    }

    if(document.getElementById("Fam").checked){
    Fam=("Event is associated with family programs.");
    } else {
    Fam=("No association to any family program.");
    }

    if(document.getElementById("AGE").checked){
        AGE=("Users has to receive Auto Generated Email.");
        } else {
        AGE=("Auto Generated Email is not required.");
        }
    
    if(document.getElementById("POC").checked){
        POC=("There is a point of contact");
        } else {
        POC=("There is no point of contact.");
        }

    if(document.getElementById("Host").checked){
        Host=("There is a hosting command point of contact.");
        } else {
        Host=("There is no hosting command point of contact.");
        }      
                  
    alert("Event Details: \n\n" + Reg +"\n" + Fam +"\n" + AGE +"\n" + POC +"\n" + Host);

}

function enableButton1() {
    if(document.getElementById("Reg").checked){
    document.getElementById("AGE").disabled = false;
    } else {
    document.getElementById("AGE").disabled = true;
    }
}

function enableButton2() {
    if(document.getElementById("POC").checked){
    document.getElementById("Host").disabled = false;
    } else {
        document.getElementById("Host").disabled = true;
    }
}