import React from 'react';
import '../auth.css';




function SignUpComponent(props) {
    const {
        handleChange,
        handleSubmit,
        isSubmitting,
        values,
        errors,
        touched,
        setTouched
    } = props;

    const inputsView = [];
    for (const inputName in values) {
        inputsView.push((
            <div key={inputName} className="AUTH-input-container">
                <input
                    onBlur={() => setTouched({...touched, [inputName]: true})}
                    placeholder={inputName}
                    name={inputName}
                    value={values[inputName]}
                    onChange={handleChange}
                    type={inputName === "password" ? "password" : "text"}
                    disabled={isSubmitting}
                />
                {touched[inputName] ? <p className="AUTH-error-text">{errors[inputName]}</p> : 
                                        <p className="AUTH-error-text"></p>
                }
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
            <h1 id="AUTH-title">SIGN UP</h1>
            <form id="AUTH-form"onSubmit={handleSubmit}>
                {inputsView}
                <input
                    id="AUTH-submit" 
                    type="submit" 
                    disabled={isSubmitting}
                    value={"SIGN UP"}
                />
            </form>
            <p id="social-auth-label">Sign up with social</p>
            <div id="social-icons-container">
                {socialLinksViews}
            </div>
        </section>
    )
}

export default SignUpComponent;