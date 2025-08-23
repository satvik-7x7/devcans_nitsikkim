import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Terminal, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-terminal-bg text-foreground">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <Terminal className="text-terminal-green w-16 h-16 mx-auto mb-4" />
          <h1 className="text-6xl font-bold terminal-text mb-4 glitch">404</h1>
          <h2 className="text-2xl font-bold terminal-text mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 font-mono">
            &gt; Error: The requested resource could not be located.<br/>
            &gt; Check your URL and try again.
          </p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <ArrowLeft size={18} />
            <span>Return Home</span>
          </a>
          
          <div className="text-sm text-muted-foreground font-mono">
            &gt; Redirecting to DevCans main terminal...
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
