const contactList = [  
	{ 
		name: "Raquel Ervin", 
		phone: "+1 555 555-5555", 
		address: "123 front st, Unit #1, Dakota City",    
		email: "rocket@gmail.com"
	},   
    {	
        name: "Jeremy McNinch",    
        phone: "604 718 1043",    
        address: "8631 Granville St, Vancouver",    
        email: "email@email.com"
    }
];

function insertIndexPageDOM(contact) {
    return `
        <a href="page3.html"><div class="contact">${contact}</div></a>
    `
}

function insertViewPageDOM(contact){
    return `
    <div class="contactinfo">
            <div class="contactname">
                ${contact.name}
                <img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
            </div>
            <div class="contactemail">email: ${contact.email}</div>
            <div class="contactphone">cell: ${contact.phone}</div>
            <div class="contactaddress">address: ${contact.address}</div>
            <div class="buttons">
                <button class="button edit" value="Edit">Edit</button>
                <button class="button close" value="Close">Close</button>
            </div>
        </div>
    `
}

function insertCreatePageDOM(){
    return `
    <div class="contactedit">
    <div class="contactimg">
        <img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
    </div>
    <div class="form">
        <form>
            <div class="inputcontainer">
                <input type="text" id="contactname" name="contactname" placeholder='Contact Name'>
                <button class="extrafield" id="extranamefield" name="extranamefield">+</button>
            </div>
            <div class="inputcontainer">
                <input type="tel" id="contactphone" name="contactphone" placeholder="Contact Phone">
                <button class="extrafield" id="extraphonefield" name="extraphonefield">+</button>
            </div>
            <div class="inputcontainer">
                <input type="text" id="contactaddress" name="contactaddress" placeholder="Contact Address">
                <button class="extrafield" id="extraaddressfield" name="extraaddressfield">+</button>
            </div>
            
            <div class="inputcontainer">
                <input type="email" id="contactemail" name="contactemail" placeholder="Contact Email">
                <button class="extrafield" id="extraemailfield" name="extraemailfield">+</button>
            </div>
            <div class="buttons">
                <button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
                <button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
            </div>
        </form>
    </div>
    </div>
    
    `
}

function getContactName(search){
    for(let names in contactList){
        if(search == contactList[names].name){
            return contactList[names]
        }
    }
    alert("Contact not found")
}


function createSingleIndex(evt){
    let search = evt.target.textContent
    let cName = getContactName(search)
    if (cName !=null){
        cleanUpIndex()
        renderView(cName)
    }}

