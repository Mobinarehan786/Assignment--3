

    export default function Contact() {

        return ( <div className="contactContainer">
            <h1 className="h1">Contact Us</h1>
            <div className="form-group">
            <label className="name">Name</label>
            <input className="text" id="name" name="name" required></input>
            </div>
   
            <div className="form-group">
            <label className="e-mail">E-mail</label>
            <input className="text" id="E-mail" E-mail="E-mail" required></input>
            </div>
     
            <div className="form-group">
            <label className="Message">Message</label>
            <textarea id="message" name="message"  required></textarea>
            </div>
          
            <button type="submit">Send Message</button>
           

    </div>
        )
    }