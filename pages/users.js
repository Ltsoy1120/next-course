import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"users"}>
      <h1>Список пользователей</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

/* 
    функция getStaticProps из документации next (можно также использовать getServerSideProps), вместо запроса в useEffect.
    getStaticProps нельзя применять при динамических запросах напр. users/id
    props: {users} принимаем в самом компоненте,
    рендеринг происходит на серверной части
*/

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users } // will be passed to the page component as props
  };
}
