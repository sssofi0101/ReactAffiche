using MediatR;
using Persistence;


namespace Application.Activities
{
    public class DeleteCommand 
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _dataContext;

            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = _dataContext.Activities.FindAsync(request.Id).Result;

                _dataContext.Remove(activity);

                await _dataContext.SaveChangesAsync();
            }
        }
    }
}