import { useNavigate } from 'react-router-dom';

function SecondPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto px-4">
        <div className="py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-500"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回
          </button>
        </div>
        
        <div className="text-center pt-8">
          <h1 className="text-2xl font-semibold">第二个页面</h1>
          <p className="mt-4 text-gray-600">这是一个新页面的示例内容</p>
        </div>
      </div>
    </div>
  );
}

export default SecondPage; 