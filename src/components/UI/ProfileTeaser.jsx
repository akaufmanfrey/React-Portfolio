export default function ProfileTeaser({ project: { pName, link } }) {

  return (
    <>
      <div className="ms-2 me-auto">
        <h2 className="fw-bold mb-1">{pName}</h2>
        <a href={link}>{link}</a>
      </div>
    </>
  );
}
