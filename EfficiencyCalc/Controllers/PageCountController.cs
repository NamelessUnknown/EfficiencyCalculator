using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EfficiencyCalc.Interfaces;
using EfficiencyCalc.Models;

namespace EfficiencyCalc.Controllers
{
    [Produces("application/json")]
    [Route("api/PageCount")]
    public class PageCountController : Controller
    {
        private readonly IPageCountRepo _pageCountRepo;

        public PageCountController (IPageCountRepo pageCountRepo)
        {
            _pageCountRepo = pageCountRepo;
        }

        //Fluent validation is highly recommended here -- fix this later
        [HttpPost("[action]")]
        public IActionResult AddPageCount([FromBody] PageCount pageCount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _pageCountRepo.AddPageCount(pageCount);
            return new JsonResult(pageCount.Id);
        }

        [HttpGet("[action]")]
        public IActionResult GetPageCounts()
        {
            return new JsonResult(_pageCountRepo.GetPageCounts());
        }


        [HttpGet("[action]")]
        public IActionResult GetProperty(int pageCountId)
        {
            if (pageCountId <= 0)
            {
                return BadRequest();
            }
            return new JsonResult(_pageCountRepo.GetPageCount(pageCountId));
        }

        //Fluent Validation here as well
        [HttpPost("[action]")]
        public IActionResult UpdatePageCount([FromBody] PageCount pageCount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return new JsonResult(_pageCountRepo.UpdatePageCount(pageCount));
        }


        [HttpGet("[action]")]
        public IActionResult DeletePageCount (int pageCountId)
        {
            if (pageCountId <= 0)
            {
                return BadRequest();
            }

            var pageCount = _pageCountRepo.GetPageCount(pageCountId);
            if(pageCount == null)
            {
                return NotFound("Cannot find page count with provided Id");
            }

            _pageCountRepo.DeletePageCount(pageCount);
            return new JsonResult(pageCount.Id);

        }
    }
}