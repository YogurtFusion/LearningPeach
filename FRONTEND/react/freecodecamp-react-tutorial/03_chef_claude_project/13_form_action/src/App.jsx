export default function App() {
  function signUp(formData) {
    const email = formData.get("email");
    console.log(email);

    const password = formData.get("password");
    console.log(password);
  }
  return (
    <>
      <h1>Form Action</h1>
      <main>
        <section>
          <h1>Signup form</h1>
          <form action={signUp} >
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
