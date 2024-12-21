import React, { useState } from 'react';
import bitbucketLogo from '../logo/bitbucket.png';
import githubLogo from '../logo/github.png';
import gitlabLogo from '../logo/gitlab.png';
import azureLogo from '../logo/azure.png';
import ssd from '../logo/ssd.png';
import logo from '../logo/logo.png';
import logo2 from '../logo/logo2.png';
import combined_logo from '../logo/combined_logo.png';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('saas');

  const handleSignIn = (provider) => {
    console.log(`Signing in with ${provider}`);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Stats and Design */}
      <div className="w-1/2 p-12 relative hidden lg:block">
        {/* Background Logo */}
        <div className="absolute bottom-0 left-0 opacity-1">
          <img src={logo2} alt="Background Logo" className="w-56 h-60" />
        </div>

        {/* Stats Content */}
        <div className="relative z-10">
          <div className="relative">
            {/* Top Stats Card */}
            <div className="bg-white absolute right-20 top-20 rounded-2xl shadow-lg w-96 h-34">
              {/* Header */}
              <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="CodeAnt Logo" className="w-6 h-6" />
                  <span className="font-semibold text-gray-800">AI to Detect & Autofix Bad Code</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 p-4 gap-1">
                <div className="text-center">
                  <div className="text-md font-bold mb-1">30+</div>
                  <div className="text-xs">Language Support</div>
                </div>

                <div className="text-center">
                  <div className="text-md font-bold mb-1">10K+</div>
                  <div className="text-xs">Developers</div>
                </div>

                <div className="text-center">
                  <div className="text-md font-bold mb-1">100K+</div>
                  <div className="text-xs">Hours Saved</div>
                </div>
              </div>
            </div>

            {/* Issues Fixed Card - Positioned to overlap */}
            <div className="absolute top-52 right-16 bg-white rounded-2xl shadow-lg p-3 w-52 max-h-28">
              <div className="flex justify-center items-start gap-20 mb-6 h-4">
                <div>
                  <img src={combined_logo} alt="Combined Logo" style={{ width: '33px', height: '33px' }} />
                </div>
                <div>
                  <div className="text-blue-500 font-medium flex items-center gap-1 text-sm">
                    <span className="text-blue-500">&#8593;</span>
                    14%
                  </div>
                  <div className="text-xs">This week</div>
                </div>
              </div>
              <div className="font-bold ml-2 text-xs">Issues Fixed</div>
              <div className="text-2xl font-bold ml-2">500K+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md border border-gray-200 rounded-lg">
          {/* Logo and Welcome */}
          <div className="text-center p-8">
            <div className="flex justify-center items-center gap-2 mb-4">
              <img src={logo} alt="CodeAnt Logo" className="w-8 h-8" />
              <span className="text-xl font-medium">CodeAnt AI</span>
            </div>
            <h1 className="text-2xl font-bold">Welcome to CodeAnt AI</h1>
          </div>

          {/* Main Content Container */}
          <div>
            {/* Tab Buttons */}
            <div className="p-1 bg-gray-100 mx-8 rounded-lg">
              <button
                onClick={() => setActiveTab('saas')}
                className={`w-1/2 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'saas' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                SAAS
              </button>
              <button
                onClick={() => setActiveTab('self-hosted')}
                className={`w-1/2 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'self-hosted' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Self Hosted
              </button>
            </div>

            {/* Border line between tabs and buttons */}
            <div className="border-t border-gray-200 mt-8"></div>

            {/* Sign-in Options Container with Fixed Height */}
            <div className="min-h-[320px] px-16 py-8">
              {/* Sign-in Options */}
              <div className="space-y-3">
                {activeTab === 'saas' ? (
                  <>
                    <button
                      onClick={() => handleSignIn('GitHub')}
                      className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-2.5 px-4 hover:bg-gray-50 transition-colors"
                    >
                      <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
                      Sign in with Github
                    </button>
                    <button
                      onClick={() => handleSignIn('Bitbucket')}
                      className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-2.5 px-4 hover:bg-gray-50 transition-colors"
                    >
                      <img src={bitbucketLogo} alt="Bitbucket" className="w-5 h-5" />
                      Sign in with Bitbucket
                    </button>
                    <button
                      onClick={() => handleSignIn('Azure')}
                      className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-2.5 px-4 hover:bg-gray-50 transition-colors"
                    >
                      <img src={azureLogo} alt="Azure DevOps" className="w-5 h-5" />
                      Sign in with Azure DevOps
                    </button>
                    <button
                      onClick={() => handleSignIn('GitLab')}
                      className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-2.5 px-4 hover:bg-gray-50 transition-colors"
                    >
                      <img src={gitlabLogo} alt="GitLab" className="w-5 h-5" />
                      Sign in with GitLab
                    </button>
                  </>
                ) : (
                  <>
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-2.5 px-4 hover:bg-gray-50 transition-colors">
                      <img src={gitlabLogo} alt="GitLab" className="w-5 h-5" />
                      Self Hosted GitLab
                    </button>
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-2.5 px-4 hover:bg-gray-50 transition-colors">
                      <img src={ssd} alt="SSO" className="w-5 h-5" />
                      Sign in with SSO
                    </button>
                  </>
                )}

                {/* Privacy Policy */}
                <div className="text-center text-sm text-gray-600 mt-4">
                  By signing up you agree to the{' '}
                  <a href="/privacy-policy" className="text-black hover:underline">
                    Privacy Policy
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
