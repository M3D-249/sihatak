import React from 'react';
import '../App.css';

const SignUpScreen = () => {
  return (
    <div className="signup-screen">
      <div className="logo-circle">
        <h1 className="logo-text">صحتك</h1>
      </div>

      <h2 className="signup-title">انشاء حساب</h2>
      <p className="signup-subtitle">أدخل بريدك الإلكتروني للاشتراك في هذا التطبيق</p>

      <input
        type="email"
        placeholder="email@domain.com"
        className="input"
      />

      <button className="confirm-button">تأكيد</button>

      <div className="divider">
        <hr className="line" />
        <span className="or-text">or</span>
        <hr className="line" />
      </div>

      <button className="social-button">
        <img src="https://img.icons8.com/color/20/google-logo.png" alt="Google" />
        <span>المتابعة مع Google</span>
      </button>

      <button className="social-button">
        <img src="https://img.icons8.com/ios-filled/20/mac-os.png" alt="Apple" />
        <span>المتابعة مع Apple</span>
      </button>

      <p className="terms-text">
        بالنقر على متابعة، فإنك توافق على <span className="link">شروط الخدمة</span> و
        <span className="link"> سياسة الخصوصية الخاصة</span> بنا
      </p>
    </div>
  );
};

export default SignUpScreen;
