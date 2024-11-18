using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {

        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities(CancellationToken cancellationToken) {
            return await Mediator.Send(new ActivitiesList.Query());
        }

        [HttpGet("{id}")] //api/activities/{someId}
        public async Task<ActionResult<Activity>> GetActivity(Guid id) {
            return await Mediator.Send(new ActivityDetails.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity) 
        {
            await Mediator.Send(new CreateCommand.Command {Activity = activity});

            return Created();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateActivity(Guid id, Activity editedActivity) 
        {
            editedActivity.Id = id;
            await Mediator.Send(new EditCommand.Command {Activity = editedActivity});

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id) {
            await Mediator.Send(new DeleteCommand.Command {Id = id});
            
            return Ok();
        }
    }
}