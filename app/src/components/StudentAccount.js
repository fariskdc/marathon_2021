import React from 'react';

const StudentAccount = () => {

    return (
        
        <form>
            <label >
                E-mail:
                <input type="text" name="name"/>
            </label>
            <input type="submit" value="Submit"/>

            <label>
                Password:
                <input type="text" name="Password" />
            </label>
                <input type="Submit" name ="Submit"/>

            <label>
                Broj telefona:
                <input type="text" name = "Broj telefona"/>
            </label>
                <input type="Submit" name = "Submit"/>

            <label>
                Slika:
                <input type="image" name="image"/>
            </label>
        </form>


    )

}

export default StudentAccount;