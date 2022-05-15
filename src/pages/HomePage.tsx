import { Button, Input, Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [api, setApi] = useState<string | undefined>(process.env.REACT_APP_API_URL);
  const [token, setToken] = useState<string | undefined>(process.env.REACT_APP_AUTH_TOKEN);
  const navigate = useNavigate();
  const HandleSubmit = () => {
    if (!api || !token)
      return;
    localStorage.setItem("__api", api);
    localStorage.setItem("__token", token);
    navigate('/products');
  }
  return (
    <div className="auth">
      <Space direction="vertical">
        <h1>Authantication</h1>
        <Input
          onChange={(e) => setApi(e.target.value)} 
          disabled={process.env.REACT_APP_API_URL?.length ? true : false} 
          size="large" 
          placeholder="api url without path" 
          value={api} 
          addonAfter="products" 
        />
        <Input 
          onChange={(e) => setToken(e.target.value)} 
          disabled={process.env.REACT_APP_AUTH_TOKEN?.length ? true : false} 
          size="large" 
          placeholder="auth token" 
          value={token} 
        />
        <Button onClick={HandleSubmit} type="primary">AUTH</Button>
      </Space>
    </div>
  )
}

export default HomePage;
