import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div id="contact" className="flex flex-center flex-col text-left w-full px-[10%] pt-48">
      <h1 className="text-4xl font-bold mb-10">Contact Me</h1>
      <p className="mb-5">Have any questions? Let's connect!</p>
      <form onSubmit={handleSubmit((data) => console.log(data))} className="text-(--color-bg-dark)">
        <div className="flex justify-stretch gap-4">
          <div className="grow my-2">
            <input {...register("name", { required: true })} className="w-full bg-white py-2 px-5 rounded-full" placeholder="Your Name *" />
            {errors.name && <p className="text-red-400 mx-2">Name is required.</p>}
          </div>
          <div className="grow my-2">
            <input {...register("contact", { required: true })} className="w-full bg-white py-2 px-5 rounded-full" placeholder="Email / Phone *" />
            {errors.contact && <p className="text-red-400 mx-2">Email/Phone is required.</p>}
          </div>
        </div>
        <div className="flex my-2">
          <textarea {...register("message", { required: true })} className="h-60 grow bg-white py-2 px-5 rounded-3xl" placeholder="Message *" />
        </div>
        {errors.message && <p className="text-red-400 mx-2">Please leave a message.</p>}
        <div className="flex justify-end">
          <button type="submit" className="bg-white py-2 px-5 m-2 rounded-full font-bold">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
