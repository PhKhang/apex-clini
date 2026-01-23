
import React from 'react';
import Seo from '../components/Seo';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-50">
      <Seo
        title="Contact Apex Clinic | Book Your Consultation"
        description="Get in touch with Apex Clinic in Retford to book consultations for dermal fillers, anti-wrinkle treatments, skincare, and training."
        path="/contact"
      />
      {/* 
        Trang này để trống vì Footer đã chứa đầy đủ thông tin liên hệ và form.
        Việc này giúp tránh lặp lại nội dung và giữ giao diện tối giản.
      */}
    </div>
  );
};

export default Contact;
