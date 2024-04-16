export default function Login() {
  return (
    <>
      <title>Log in</title>
      <div>
        <h1>Log in</h1>
        <form>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">
            Log in
          </button>
        </form>
      </div>
    </>
  );
}