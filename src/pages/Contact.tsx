import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Clock, CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, "Name must contain at least 2 characters"),
  email: z.string().email("Please provide a valid email structure"),
  serviceType: z.string(),
  message: z.string().min(10, "Please provide structural parameters exceeding 10 characters")
});

// Infer static form inputs explicitly from your Zod Schema structure
type ContactFormInputs = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmitForm = async (_data: ContactFormInputs) => {
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Contact Techlite Group</h1>
        <p className="text-slate-600 mt-2">Get specialized hardware assessment or localized deployment support.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Informational Channel Blocks */}
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 flex gap-3">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Location</h4>
                <p className="text-slate-600 text-xs mt-1">Techlite Group, Main Commercial Boulevard</p>
              </div>
            </div>
            <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 flex gap-3">
              <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Hours</h4>
                <p className="text-slate-600 text-xs mt-1">Mon - Sat: 9 AM - 7 PM</p>
              </div>
            </div>
          </div>

          <div className="w-full h-64 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-sm font-medium">
            [ Interactive Storefront Map Module ]
          </div>
        </div>

        {/* Input Validation Form Block */}
        <div className="bg-white p-6 border border-slate-200 rounded-xl shadow-sm">
          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="font-bold text-emerald-900 text-lg">Inquiry Forwarded Successfully</h3>
              <p className="text-emerald-700 text-sm">Our hardware technicians will review your technical specifications shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Full Name</label>
                <input {...register('name')} className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm transition" placeholder="Alex Chen" />
                {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Email Address</label>
                <input {...register('email')} className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm transition" placeholder="alex@techlite.com" />
                {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Required Configuration</label>
                <select {...register('serviceType')} className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm bg-white transition">
                  <option>System Architecture Configuration</option>
                  <option>Hardware Upgrade Diagnostic</option>
                  <option>Volume Software Installation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Notes & Build Details</label>
                <textarea {...register('message')} row="4" className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm transition" placeholder="Provide system requirements..."></textarea>
                {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>}
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-medium p-3 rounded-lg text-sm transition">
                {isSubmitting ? 'Transmitting Build Spec...' : 'Submit Inquiry'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}