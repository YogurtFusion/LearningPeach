export default function App() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    console.log(email);
    // Gather the info from the form
    // submit it to a backend
    formEl.reset();
  }
  return (
    <>
      <h1>Form Submission</h1>
      <main>
        <section>
          <h1>Signup form</h1>
          <form onSubmit={handleSubmit} method="post">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" placeholder="joe@schmoe.com" />
            {/* we acess the input data through name */}

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />

            <button>Submit </button>
          </form>
        </section>
      </main>
    </>
  );
}
