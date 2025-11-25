import React, { useState } from 'react';
import { X, Phone, Mail, Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'ron',
    message: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Create FormData for file upload
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('serviceType', formData.serviceType);
    formDataToSend.append('message', formData.message);
    
    if (selectedFile) {
      formDataToSend.append('document', selectedFile);
    }

    try {
      // TODO: Replace this URL with your actual form submission endpoint
      // Options include: Formspree, Google Forms API, your own backend, etc.
      const response = await fetch('YOUR_FORM_ENDPOINT_HERE', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', serviceType: 'ron', message: '' });
          setSelectedFile(null);
          setSubmitStatus('idle');
          onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full my-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button - Fixed position */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 text-brand-gray hover:text-brand-navy transition-colors bg-white rounded-full p-2 shadow-lg"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-brand-teal to-brand-aqua text-white p-6 rounded-t-2xl">
          <h2 className="font-heading text-3xl md:text-4xl mb-2">GET STARTED</h2>
          <p className="text-white text-opacity-90">Fill out the form below and we'll get back to you promptly</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-brand-navy font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-brand-gray border-opacity-30 rounded-lg focus:border-brand-teal focus:outline-none transition-colors"
              placeholder="John Doe"
            />
          </div>

          {/* Email and Phone */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-brand-navy font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-brand-gray border-opacity-30 rounded-lg focus:border-brand-teal focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-brand-navy font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-brand-gray border-opacity-30 rounded-lg focus:border-brand-teal focus:outline-none transition-colors"
                placeholder="(954) 555-0123"
              />
            </div>
          </div>

          {/* Service Type */}
          <div className="mb-4">
            <label htmlFor="serviceType" className="block text-brand-navy font-semibold mb-2">
              Service Needed *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-brand-gray border-opacity-30 rounded-lg focus:border-brand-teal focus:outline-none transition-colors bg-white"
            >
              <option value="ron">Remote Online Notarization (RON)</option>
              <option value="mobile">Mobile Notary Service</option>
              <option value="not-sure">Not Sure / Need Guidance</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-brand-navy font-semibold mb-2">
              Details About Your Notarization *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-brand-gray border-opacity-30 rounded-lg focus:border-brand-teal focus:outline-none transition-colors resize-none"
              placeholder="Please describe the document(s) you need notarized, preferred date/time, and any other relevant details..."
            />
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label htmlFor="document" className="block text-brand-navy font-semibold mb-2">
              Upload Document (Optional)
            </label>
            <div className="border-2 border-dashed border-brand-gray border-opacity-30 rounded-lg p-4 text-center hover:border-brand-teal transition-colors">
              <input
                type="file"
                id="document"
                name="document"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="hidden"
              />
              <label htmlFor="document" className="cursor-pointer">
                <Upload size={32} className="mx-auto text-brand-teal mb-2" />
                {selectedFile ? (
                  <p className="text-brand-navy font-medium">{selectedFile.name}</p>
                ) : (
                  <>
                    <p className="text-brand-navy font-medium mb-1">Click to upload document</p>
                    <p className="text-sm text-brand-gray">PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Submit Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800">
              <CheckCircle size={20} />
              <span>Thank you! We'll contact you shortly.</span>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800">
              <AlertCircle size={20} />
              <span>Submission failed. Please call us at {CONTACT_INFO.phone}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-coral text-white py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit Request'}
          </button>

          {/* Alternative Contact */}
          <div className="mt-6 pt-6 border-t border-brand-gray border-opacity-20 text-center">
            <p className="text-brand-gray mb-3">Prefer to contact us directly?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 text-brand-teal hover:text-brand-darkTeal font-medium"
              >
                <Phone size={18} />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center justify-center gap-2 text-brand-teal hover:text-brand-darkTeal font-medium"
              >
                <Mail size={18} />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
