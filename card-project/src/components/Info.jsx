import React from 'react';

const Info = () => {
    return (
        <section>
            <img 
                src="https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="profile"
                className="profile-img"
            />
            <div className="info-container">
                <h2>Frank Marco</h2>
                <p>Fullstack Developer</p>
                <small>Lorem ipsum text</small>
                <div className="btn-container">
                    <button className="btn btn-email">
                        <i class="fa-solid fa-envelope"></i> 
                        Email
                    </button>    
                    <button className="btn btn-linkedin">
                        <i class="fa-brands fa-linkedin"></i>  
                        Linkedin
                    </button> 
                </div> 
            </div>         
        </section>
    );
}

export default Info;