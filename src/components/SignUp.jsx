import {React,useState} from 'react';
import styles from './SignUp.module.css';
import Logo from './SignUpUtility/UserTypeSelection/Logo';
import ProgressBar from './SignUpUtility/UserTypeSelection/ProgressBar';
import AccountTypeSelector from './SignUpUtility/UserTypeSelection/AccountTypeSelector';
// import ContinueButton from './SignUpUtility/UserTypeSelection/ContinueButton';
// import ProgressBar from './components/SignUpUtility/Farmer/FarmerDetails1/ProgressBar';
import FormInput from './SignUpUtility/Farmer/FarmerDetails1/FormInput';
// import FarmerRegistration from './SignUpUtility/Farmer/FarmerDetails1/FarmerRegistration';
import LandCropDetails from './SignUpUtility/Farmer/FarmerDetails2/LandCropDetails';
import CropOption from './SignUpUtility/Farmer/FarmerDetails2/CropOption';
import KycForm from './SignUpUtility/Farmer/FarmerDetails3/KycForm';
import FormField from './SignUpUtility/Farmer/FarmerDetails3/FormField';
function Signup() {
    const progressSteps = [1, 2, 3, 4];
    const activeStep = 2;
    const formFields = ['Field1', 'Field2', 'Field3', 'Field4'];
    const steps = [
        { label: 'Step 1: User Type' },
        { label: 'Step 2: Personal Information' },
        { label: 'Step 3: Address Details' },
        { label: 'Step 4: Account Details' },
        { label: 'Step 5: Confirmation' },
      ];
      
      
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
        
    };
  
    const handlePrevious = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    };      

    const renderStepContent = () => {
        switch (currentStep) {
          case 0:
            return <>
            <main className={styles.signupContainer}>
            <section className={styles.contentWrapper}>
              <Logo />
              <ProgressBar />
              <h1 className={styles.title}>Create your account</h1>
              <AccountTypeSelector />
              {/* <ContinueButton /> */}
              {/* <div className={styles.buttonWrapper}>
                  <button className={styles.continueButton} onClick={handleNext}>
                      <span className={styles.buttonText}>Continue</span>
                  </button>
              </div> */}
              <div>
                {currentStep > 0 && <button onClick={handlePrevious}>Previous</button>}
                {currentStep < steps.length - 2 ? (
                <div className={styles.buttonWrapper}>
                <button className={styles.continueButton} onClick={handleNext}>
                    <span className={styles.buttonText}>Continue</span>
                </button>
                </div> 
                ) : (
                // <button onClick={() => alert('Form submitted!')}>Submit</button>
                <div className={styles.buttonWrapper}>
                  <button className={styles.continueButton} onClick={() => alert('Form submitted!')}>
                      <span className={styles.buttonText}>Submit</span>
                  </button>
                </div> 
                )}
              </div>
            </section>
            </main>;
            </>
          case 1:
            return <>
                <main className={styles.container}>
                <header className={styles.logo}>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f395b72863cf1e4815bfd0e3b57518982b85aefd0b86eafd2ce712ea2d6986a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.logoIcon} alt="" />
                    <div className={styles.logoText}>khet-E</div>
                </header>

                <ProgressBar steps={4} activeSteps={2} />

                <section className={styles.formHeader}>
                    {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b967c776703dc6b468bb2875af47003fa5718e90ada92922ae9cfdd687e580a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.formHeaderIcon} alt="" /> */}
                    <h1 className={styles.formHeaderText}>Enter your details below</h1>
                </section>

                <form>
                    <FormInput label="Phone number" type="tel" placeholder="9999999999" />
                    <FormInput label="Email" type="email" placeholder="example@gmail.com" />
                    <FormInput label="Pin code" type="text" />
                    <FormInput label="City/Village" type="text" />

                    <div>
                        {currentStep > 0 && <button onClick={handlePrevious}>Previous</button>}
                        {currentStep < steps.length - 1 ? (
                        <div className={styles.buttonWrapper}>
                        <button className={styles.continueButton} onClick={handleNext}>
                            <span className={styles.buttonText}>Continue</span>
                        </button>
                        </div> 
                        ) : (
                        // <button onClick={() => alert('Form submitted!')}>Submit</button>
                        <div className={styles.buttonWrapper}>
                        <button className={styles.continueButton} onClick={() => alert('Form submitted!')}>
                            <span className={styles.buttonText}>Submit</span>
                        </button>
                        </div> 
                        )}
                    </div>
                </form>
                </main>
            </>
          case 2:
            return <>
                <main className={styles.landWrapper}>
      <header className={styles.logoContainer}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f395b72863cf1e4815bfd0e3b57518982b85aefd0b86eafd2ce712ea2d6986a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.logoImage} alt="Khet-E logo" />
        <div className={styles.logoText}>khet-E</div>
      </header>

      <ProgressBar />

      <section className={styles.sectionTitle}>
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b967c776703dc6b468bb2875af47003fa5718e90ada92922ae9cfdd687e580a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.sectionIcon} alt="" /> */}
        <h1>Land and crop details</h1>
      </section>

      <form className={styles.formContainer}>
        <div className={styles.formRow}>
          <div className={styles.formColumn}>
            <label htmlFor="landArea" className={styles.formLabel}>Land Area</label>
            <input id="landArea" type="text" className={styles.formInput} value="20" readOnly />
          </div>
          <div className={styles.formColumn}>
            <label htmlFor="unit" className={styles.formLabel}>Unit</label>
            <select id="unit" className={styles.formInput}>
              <option>In acres, hectare</option>
            </select>
          </div>
        </div>

        <label className={styles.cropType}>Type of crop</label>
        <CropOption name="Wheat" />
        <CropOption name="Rice" isSpaced />
        <CropOption name="Maize" isSpaced />
      </form>

      {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30c34303-94e4-497f-8046-9e0baf115694?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.avatarContainer} alt="User avatar" /> */}

      <div>
                        {currentStep > 0 && <button onClick={handlePrevious}>Previous</button>}
                        {currentStep < steps.length - 1 ? (
                        <div className={styles.buttonWrapper}>
                        <button className={styles.continueButton} onClick={handleNext}>
                            <span className={styles.buttonText}>Continue</span>
                        </button>
                        </div> 
                        ) : (
                        // <button onClick={() => alert('Form submitted!')}>Submit</button>
                        <div className={styles.buttonWrapper}>
                        <button className={styles.continueButton} onClick={() => alert('Form submitted!')}>
                            <span className={styles.buttonText}>Submit</span>
                        </button>
                        </div> 
                        )}
                    </div>
      
                </main>
            </>
          case 3:
            return <>
            <main className={styles.container}>
                    <header className={styles.logo}>
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f395b72863cf1e4815bfd0e3b57518982b85aefd0b86eafd2ce712ea2d6986a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.logoIcon} alt="" />
                        <h1 className={styles.logoText}>khet-E</h1>
                    </header>

                    <ProgressBar steps={4} />

                    <section className={styles.formTitle}>
                        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b967c776703dc6b468bb2875af47003fa5718e90ada92922ae9cfdd687e580a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.titleIcon} alt="" /> */}
                        <h2>KYC details</h2>
                    </section>

                    <form>
                        {formFields.map((field, index) => (
                        <FormField key={index} fieldName={field} />
                        ))}

                        <div>
                        {currentStep > 0 && <button onClick={handlePrevious}>Previous</button>}
                        {currentStep < steps.length - 1 ? (
                        <div className={styles.buttonWrapper}>
                        <button className={styles.continueButton} onClick={handleNext}>
                            <span className={styles.buttonText}>Continue</span>
                        </button>
                        </div> 
                        ) : (
                        // <button onClick={() => alert('Form submitted!')}>Submit</button>
                        <div className={styles.buttonWrapper}>
                        <button className={styles.continueButton} onClick={() => alert('Form submitted!')}>
                            <span className={styles.buttonText}>Submit</span>
                        </button>
                        </div> 
                        )}
                    </div>
                    </form>
                    </main>
            </>;
          case 4:
            return <>
            <main className={styles.container}>
            <header className={styles.logo}>
                <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f395b72863cf1e4815bfd0e3b57518982b85aefd0b86eafd2ce712ea2d6986a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" 
                className={styles.logoIcon} 
                alt="Khet-E logo" 
                />
                <h1 className={styles.logoText}>khet-E</h1>
            </header>
            
            <section className={styles.otpHeader}>
                <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b967c776703dc6b468bb2875af47003fa5718e90ada92922ae9cfdd687e580a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" 
                className={styles.arrowIcon} 
                alt="" 
                />
                <h2 className={styles.otpLabel}>Enter OTP(email)</h2>
            </section>
            
            <form className={styles.otpInputWrapper}>
                <label htmlFor="otpInput" className={styles.visuallyHidden}>Enter OTP</label>
                <input 
                type="text" 
                id="otpInput" 
                className={styles.otpInput} 
                aria-label="Enter OTP" 
                />
            </form>
            
            <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/878d556b5ebdc27bdc75ddfd44f0d8f2205da5a90a3cf53714120ad6d54f8a05?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" 
                className={styles.decorativeImage} 
                alt="" 
            />
            
            <div>
                        {currentStep > 0 && <button onClick={handlePrevious}>Previous</button>}
                        {currentStep < steps.length - 1 ? (
                        <div className={styles.buttonWrapper}>
                        <button className={styles.continueButton} onClick={handleNext}>
                            <span className={styles.buttonText}>Continue</span>
                        </button>
                        </div> 
                        ) : (
                        // <button onClick={() => alert('Form submitted!')}>Submit</button>
                        <div className={styles.buttonWrapper}>
                        <button className={styles.continueButton} onClick={() => alert('Form submitted!')}>
                            <span className={styles.buttonText}>Submit</span>
                        </button>
                        </div> 
                        )}
                    </div>
            </main>
            </>
          default:
            return <div>Default</div>
        }
    };

  return (
    <div>{renderStepContent()}</div>
    
  );
}

export default Signup;