content = content.replace('className="text-lg md:text-xl font-bold leading-tight"', "className={`text-lg md:text-xl font-bold leading-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}") 
content = content.replace('className="text-xs text-blue-200"', "className={`text-xs transition-colors ${scrolled ? 'text-blue-600' : 'text-blue-200'}`}") 
open('Home.tsx', 'w', encoding='utf-8').write(content) 
print('Done') 
