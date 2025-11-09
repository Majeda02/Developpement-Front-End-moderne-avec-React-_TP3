function Notifications() {
  const notifications = 3; // 3 pour tester

  return (
    <div>
      {notifications > 0 && <p>Vous avez des notifications</p>}
    </div>
  );
}

export default Notifications;