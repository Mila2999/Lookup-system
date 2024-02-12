import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <hr />
      <main>
        <h2>An error occurred!</h2>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}
export default ErrorPage;
