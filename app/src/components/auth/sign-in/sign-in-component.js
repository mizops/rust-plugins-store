import React from 'react';
import './sign-in.css';


function SignInComponent(props) {
    const {
        isSubmitting,
        values,
        handleChange,
        handleSubmit,
        error
    } = props;
    const inputsViews = [];
    for (const inputName in values) {
        inputsViews.push((
            <div key={inputName} className="AUTH-input-container">
                <input
                    value={values[inputName]}
                    type={inputName === "password" ? "password" : "text"}
                    className="AUTH_SIGN_IN-input" 
                    name={inputName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder={inputName}
                />
            </div>
        ))
    }
    const socialImageUrls = {
        vk: 'https://cdn.worldvectorlogo.com/logos/vk-1.svg',
        google: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Google%2B_icon.svg/1024px-Google%2B_icon.svg.png",
        facebook: "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png",
        steam: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png"
    }
    const socialLinksViews = [];
    for (const labelName in socialImageUrls) {
        socialLinksViews.push((
            <img 
                key={socialImageUrls[labelName]} 
                src={socialImageUrls[labelName]}
                alt={labelName}
                className="socialAuth"
            />
        ));
    } 
    return(
        <section id="AUTH-container">
            <h1 id="AUTH-title">SIGN IN</h1>
            <form id="AUTH-form" onSubmit={handleSubmit}>
                {inputsViews}
                <p id="AUTH_SIGN_IN-error-text">{error}</p>
                <input
                    id="AUTH-submit" 
                    type="submit" 
                    disabled={isSubmitting}
                    value={"SIGN IN"}
                />
            </form>
            <p id="social-auth-label">Sign in with social</p>
            <div id="social-icons-container">
                {socialLinksViews}
            </div>
        </section>
    )
}

export default SignInComponent;