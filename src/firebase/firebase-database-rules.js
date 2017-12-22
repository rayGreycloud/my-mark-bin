// For use in firebase console
// database rules
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
    	"$user_id": {
      	".read": "$user_id === auth.uid",
    	  ".write": "$user_id === auth.uid",
        "expenses": {
          "$expense_id": {
          	".validate": "newData.hasChildren(['description', 'amount', 'createdAt', 'note'])",
            "description": {
              ".validate": "newData.isString() && newData.val().length > 0"                      
            },
            "amount": {
              ".validate": "newData.isNumber()"
            },
            "createdAt": {
               ".validate": "newData.isNumber()"             
            },
            "note": {
              ".validate": "newData.isString()"              
            },
        		"$other": {
        			".validate": false    
        		}            
          }
        },
        "$other": {
        	".validate": false    
        }
      }
    }
  }
}