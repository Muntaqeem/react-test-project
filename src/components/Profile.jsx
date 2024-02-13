function Profile({name, imageUrl, addProps, show}) {
  return (
    <>
      {show === true && <img
        src={imageUrl}
        alt="Katherine Johnson"
        onClick={addProps}
      />}
      <p>{name}</p>
    </>
    
  );
}

export default Profile;