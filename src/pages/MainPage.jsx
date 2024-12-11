import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainPage() {
  const navigate = useNavigate();

  const handleButtonClick1 = () => {
    console.log('按钮1被点击了！');
  };

  const handleButtonClick2 = () => {
    toast.success('这是一条提示消息！', {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleButtonClick3 = () => {
    navigate('/second');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto pt-8 px-4">
        <h1 className="text-2xl font-semibold mb-6 text-center">功能测试</h1>
        
        <div className="space-y-4">
          <button
            onClick={handleButtonClick1}
            className="w-full p-4 bg-blue-500 text-white rounded-xl active:bg-blue-600 transition-colors"
          >
            打印日志
          </button>

          <button
            onClick={handleButtonClick2}
            className="w-full p-4 bg-green-500 text-white rounded-xl active:bg-green-600 transition-colors"
          >
            显示Toast
          </button>

          <button
            onClick={handleButtonClick3}
            className="w-full p-4 bg-purple-500 text-white rounded-xl active:bg-purple-600 transition-colors"
          >
            打开新页面
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default MainPage; 